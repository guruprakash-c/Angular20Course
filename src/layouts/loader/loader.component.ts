import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div class="text-center p-4">
      <div class="loader"></div>
    </div>
  `,
  styles: `
  .loader {
    border: 3px dotted #B2B2B2; 
    border-top: 3px solid #E23237; 
    border-radius: 50%;
    width: 32px;
    height: 32px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `
})
export class LoaderComponent {

}
