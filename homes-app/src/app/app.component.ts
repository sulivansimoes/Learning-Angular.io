import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'; //importa??o em nivel de arquivo
import { HousingLocationComponent } from './housing-location/housing-location.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `
      <main>
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
        </header>
        <section>
          <app-home></app-home>
        </section>
      </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, HousingLocationComponent] //importa dependencia no metadados do componente 
})
export class AppComponent {
  title = 'homes';
}
