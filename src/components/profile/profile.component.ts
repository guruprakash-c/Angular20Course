import { Component } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData:any = {};
  isEligibleforPremium:boolean; 
  constructor(private userService:UserService) {
    this.userData = this.userService.userData; 
    this.isEligibleforPremium = this.userService.isEligibleforPremium();
  }
}
