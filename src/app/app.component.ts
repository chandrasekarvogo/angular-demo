import { Component } from '@angular/core';
import { CoreService } from './components/core/services/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ideal-app';
  currentUser;
  constructor(
    private _coreService: CoreService 
  ){}
  ngOnInit() {
    this._coreService.currentUser.subscribe((userData) => {
      console.log("userData", userData);
      this.currentUser = userData;
    })
    // this.currentUser = this._coreService.currentUser;
  }
}
