import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/core/registration/registration.component';
import { LoginComponent } from './components/core/login/login.component';
import { AuthenticatedComponent } from './components/core/authenticated/authenticated.component';

const routes: Routes = [
      { path: '', component: AuthenticatedComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
