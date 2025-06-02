import { Component, WritableSignal, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LinkedSignalsComponent } from '../linked-signals/linked-signals.component';

@Component({
  selector: 'app-signals',
  imports: [FormsModule, LinkedSignalsComponent],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
 inputVal:number = 0;
 counter:WritableSignal<number> = signal(0);
 constructor(){
  this.counter.set(this.inputVal);
  effect(() =>{ console.log("Counter value: " + this.counter()); })
 }
 onChange = (e:any) => {
  this.counter.set(e.target.value);
 }
 onIncrement = () => {
  this.counter.update(vl => this.inputVal + 1);
  this.inputVal+=1;
 }
 onDecrement = () => {
  this.counter.update(vl => this.inputVal - 1);
  this.inputVal-=1;
 }
}
