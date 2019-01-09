import { Component, OnInit } from '@angular/core';
import { CoreService } from '../services/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ideal-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.scss']
})
export class AuthenticatedComponent implements OnInit {

  constructor(
    private _coreService: CoreService,
    private router: Router,
  ) {
  }
  ngOnInit() {
  }

}
