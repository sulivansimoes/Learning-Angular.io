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
        <input type='text' placeholder='Filtre pela cidade' #filter>
        <button class="primary" type='button' (click)="filterResults(filter.value)">Pesquise</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredHousingLocationList" [housingLocation]="housingLocation">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //Adicionando injecao de dependencia usando o inject 
  housingLocationService: HousingLocationService = inject(HousingLocationService)

  housingLocationList: HousingLocation[] = []

  filteredHousingLocationList: HousingLocation[] = []

  constructor() {
    this.housingLocationService.getAllHousingLocation().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredHousingLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {

    if (!text) this.filteredHousingLocationList == this.housingLocationList;
    console.log(text)
    this.filteredHousingLocationList = this.housingLocationList.filter(
      housingLocationList => housingLocationList?.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
