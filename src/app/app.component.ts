import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <a href="#" class="navbar-brand">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item ative">
                <a routerLink="" class="nav-link">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a routerLink="GitHub" class="nav-link">GitHub</a>
            </li>
            <li class="nav-item">
                <a routerLink="AboutUs" class="nav-link">About Us</a>
            </li>
        </ul>
    </div>
    </nav>
    <router-outlet></router-outlet>`,
  providers: []
})

export class AppComponent {

  constructor() {

  }

}
