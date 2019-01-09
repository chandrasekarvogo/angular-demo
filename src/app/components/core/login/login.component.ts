import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CoreService } from '../services/core.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ReplaySubject } from 'rxjs';

// import { AlertService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _coreService: CoreService,
    private _localStorage: LocalStorageService
    // private alertService: AlertService
  ) {
    if (this._coreService.currentUsers) {
        this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.loading = true;
      const data = this.loginForm.value;
      this._coreService.authUser(data);
      this._coreService.isAuthenticated$.subscribe((value) => {
        if (value) {
        this.router.navigate([this.returnUrl]);
      }
      });
    }
  }
}
