import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <footer class="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"> <div class="col-md-4 d-flex align-items-center"> <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap"> Angular v19.0 </a> <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2025 DEVstoc</span> </div> </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
