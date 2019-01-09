import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CoreConfig {
   URLs =  {
       login: '/login',
       signup: 'register'
   };
}
