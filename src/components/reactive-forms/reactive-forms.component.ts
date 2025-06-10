import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { first } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
  reactiveForm:FormGroup; 

  constructor(private fb: FormBuilder) {
    /*this.reactiveForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(),
      staySignedIn: new FormControl(true),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        country: new FormControl(''),
        zip: new FormControl()
      })
    });*/
    this.reactiveForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')]],
      staySignedIn: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        country: [''],
        zip: ['']
      }),
      skills: this.fb.array([])
    });  
    this.reactiveForm.controls['staySignedIn'].disable();
  }
  get skills () : FormArray{
    return this.reactiveForm.get('skills') as FormArray
  }
  newSkill():FormGroup{
    return this.fb.group({
      skill: ''
    })
  }
  addSkill(){
    this.skills.push(this.newSkill())
  }
  deleteSkill(i:number){
    this.skills.removeAt(i);
  }
  onSubmit(){
    console.log(this.reactiveForm.value); 
  }
  setAllValues(){
    this.reactiveForm.setValue({
      firstName: 'Jona',
      lastName: 'Matt',
      email: 'jm@yahoo.com',
      password: '1234',
      staySignedIn: true,
      address: {
        city: 'Denver',
        state: 'Colorado',
        country: 'USA',
        zip: 19701
      }
    });
  }
  resetValues(){
    this.reactiveForm.reset();
  }
  setPartialValues(){
    this.reactiveForm.patchValue({
      address: {
        city: 'France',
        state: 'London',
        country: 'UK',
        zip: 18704
      }
    });    
    this.reactiveForm.controls['email'].patchValue('london@gmx.com');
  }
}
