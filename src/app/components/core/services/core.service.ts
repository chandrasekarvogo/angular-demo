import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CoreConfig } from '../core.config';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CoreService {
  private currentUserSubject = new BehaviorSubject({});
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();


  constructor(
    private _apiService: ApiService,
    private _coreConfig: CoreConfig,
    private _localStorage: LocalStorageService

  ) { }

  public authUser = (args: any) => {
    const opts = {
      type: 'POST',
      data: args
    };
    this._apiService.api(this._coreConfig.URLs.login , opts)
    .subscribe(
      data => this.setAuth(data),
      err => this.purgeAuth()
    );
  }

  purgeAuth() {
    // Remove JWT from localstorage
    this._localStorage.remove('user');
    // Set current user to an empty object
    this.currentUserSubject.next({});
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  setAuth(user) {
    // Save JWT sent from server in localstorage
    this._localStorage.set("user", user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }


  get currentUsers() {
    if(this._localStorage.get("currentUser")){
      return this._localStorage.get("currentUser");
    }else{
      return false;
    }
  }
}
