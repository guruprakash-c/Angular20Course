import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { HeaderComponent } from "./layouts/header/header.component";
import { FooterComponent } from "./layouts/footer/footer.component";
import { LoaderComponent } from "./layouts/loader/loader.component";
import { BuiltInPipesComponent } from './components/built-in-pipes/built-in-pipes.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoaderComponent, BuiltInPipesComponent],
  template: `
    <!--app-header/>
    <main>
    <app-loader/>
    </main>  
    <app-footer/-->
    <app-built-in-pipes/>
    <router-outlet/>
  `,
})
export class App {
  name = 'Angular';

}

bootstrapApplication(App);
