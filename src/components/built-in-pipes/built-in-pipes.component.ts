import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
textStr:string = "This is a test string!";
jsonData = [
  {id:1, name:'Joe', age: 23},
  {id:2, name:'Sarah', age: 32},
  {id:3, name:'Anna', age: 12}
];
todaysDate:Date = new Date();
floatVal:number = 3.814152892;
techs = of(['C#','Java','PHP','R','Python']);
}
