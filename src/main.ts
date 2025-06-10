import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileComponent],
  template: `
    <!--app-header/>
    <main>
    <app-loader/>
    </main>  
    <app-footer/>-->
    <app-profile />
    <router-outlet/>
  `,
})
export class App {
  name = 'Angular';

}

bootstrapApplication(App);
