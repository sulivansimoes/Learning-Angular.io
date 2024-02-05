import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //importacao em nivel de arquivo

import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <main>
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
        <section>
          <router-outlet></router-outlet>
        </section>
      </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule] //importa dependencia no metadados do componente 
})
export class AppComponent {
  title = 'homes';
}
