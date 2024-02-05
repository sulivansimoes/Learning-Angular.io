import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../interface/housing-location';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocationService } from '../service/housing-location.service';

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

  //Adicionando inje??o de dependencia usando o inject 
  housingLocationService: HousingLocationService = inject(HousingLocationService)

  housingLocationList: HousingLocation[] = []

  constructor() {
    this.housingLocationList = this.housingLocationService.getAllHousingLocation()
  }

}
