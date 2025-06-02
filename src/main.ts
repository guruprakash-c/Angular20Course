import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignalsComponent],
  template: `
    <app-signals/>
    <router-outlet/>
  `,
})
export class App {
  name = 'Angular';

}

bootstrapApplication(App);
