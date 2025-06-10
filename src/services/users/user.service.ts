import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:any = {
    id:1,
    name: 'Alex',
    userName: 'aleX123',
    email: 'aleX123@gmail.com',
    subscription: 'basic'
  };

  isEligibleforPremium = () :boolean => (this.userData.subscription == 'basic' && this.userData.email.endsWith('@gmail.com')) ? true : false;
}
