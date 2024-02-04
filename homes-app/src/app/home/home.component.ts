import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interface/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { getDataBase } from '../data/database';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type='text' placeholder='Filtre pela cidade'>
        <button class='primary' type='button'>Pesquise</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = getDataBase()
}
