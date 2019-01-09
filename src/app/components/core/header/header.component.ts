import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';

@Component({
  selector: 'ideal-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _coreService: CoreService) {
  }

  ngOnInit() {
  }
  logout() {
    this._coreService.purgeAuth();
  }
}
