import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
  <header class="navbar navbar-expand-lg bg-body-secondary">
   <div class="container-fluid">
      <a class="navbar-brand" href="/">Angular v19.0</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainmenu">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
               <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">Page</a>
            </li>
            <li class="nav-item dropdown">
               <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Signals
               </a>
               <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/signals">Signals Concepts</a></li>
                  <li><a class="dropdown-item" href="/linked-signals">Linked Signals</a></li>
                  <li>
                     <hr class="dropdown-divider">
                  </li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
               </ul>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">Disabled</a>
            </li>
         </ul>
         <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-dark" type="submit">Search</button>
         </form>
      </div>
   </div>
</header>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
