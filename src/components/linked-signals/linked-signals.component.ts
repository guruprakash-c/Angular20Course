import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signals',
  imports: [],
  templateUrl: './linked-signals.component.html',
  styleUrl: './linked-signals.component.css'
})
export class LinkedSignalsComponent {
  quantity = signal(0);
  price = 10;
  total = computed(() => this.quantity() * this.price);
  shTotal = linkedSignal(() => this.quantity() * this.price);
  scTotal = linkedSignal({
    source: this.quantity,
    computation: () => this.quantity() * this.price, 
    equal: (q:any,p:any) => q === p
  });
  calculate = () => this.quantity.set(2);
}
