import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  userObj:User = {};
  rules:any = [];
  ngOnInit(): void {
    // this.userObj = {
    //   firstName:'Sarah',
    //   lastName:'Nicole',
    //   email:'sn@aol.com',
    //   password:'1234abc',
    //   staySignedIn:true
    // };
    this.rules = [
      'At least 8 characters long.',
      'Contains at least one uppercase letter.',
      'Contains at least one lowercase letter.',
      'Contains at least one digit.',
      'Contains at least one special character (e.g., @, #, $, etc.).',
      'No spaces allowed.',
    ];
  }
   
  onSubmit(userForm:NgForm){
    console.log(userForm.value);
  }
  setValue(userForm:NgForm):void{
    let uObj = {
      firstName:'Sarah',
      lastName:'Nicole',
      email:'sn@aol.com',
      password:'123',
      staySignedIn:true
    };   
    userForm.setValue(uObj); 
  }
  patchValue(userForm:NgForm):void{
    let uObj = {
      firstName:'Alex',
      lastName:'Mattson',
      email:'am@sify.com'
    };   
    userForm.control.patchValue(uObj); 
  }
  resetValue(userForm:NgForm):void {
    // userForm.reset();
    userForm.resetForm();
  }
}
