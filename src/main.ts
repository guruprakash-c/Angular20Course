import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <!--app-header/>
    <main>
    <app-loader/>
    </main>  
    <app-footer/>-->
    <router-outlet/>
  `,
})
export class App {
  name = 'Angular';

}

bootstrapApplication(App);
