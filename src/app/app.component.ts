import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from './components/core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideal-app';
  currentUser: any;
  constructor(private _coreService: CoreService, private router: Router) {}

  ngOnInit() {
    this._coreService.currentUser$.subscribe((userData) => {
      if (!userData) {
        this.router.navigate(['/login']);
       }
      this.currentUser = userData;
    });
    // this.currentUser = this._coreService.currentUser;
    if (!this._coreService.currentUsers) {
      this.router.navigate(['/login']);
    }

  }

}
