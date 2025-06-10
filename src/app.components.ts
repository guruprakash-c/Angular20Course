import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { LoaderComponent } from "./layouts/loader/loader.component";
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
  <!-- <app-header/>
  <main>
    <app-loader/>
  </main>  
  <app-footer/> -->
  <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {}

bootstrapApplication(AppComponent);
