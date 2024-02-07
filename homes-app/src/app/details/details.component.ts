import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../interface/housing-location';
import { HousingLocationService } from '../service/housing-location.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class='listing-photo' [src]="housingLocation?.photo">
      <section class='listing-description'>
        <h2 class='listing-heading'>{{housingLocation?.name}}</h2>
        <p class='listing-location'>{{housingLocation?.city}},{{housingLocation?.state}}</p>
      </section>
     <section class='listing-features'>
        <h2 class='listing-heading'>About this location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: : {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: : {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class='listing-apply'>
        <h2 class='listing-heading'>Apply now to live here</h2>

          <form [formGroup]="applyForm" (submit)="submitApplication()">
            <label for="first-name">First Name</label>
            <input id="first-name" type="text" formControlName="firstName">

            <label for="last-name">Last Name</label>
            <input id="last-name" type="text" formControlName="lastName">

            <label for="email">Email</label>
            <input id="email" type="text" formControlName="email">

            <button type="submit" class="primary">Apply now</button>
          </form>
        </section>      
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })

  //Adicionando Injecao de dependencia diretamente no constructor
  constructor(private route: ActivatedRoute,
    private housingService: HousingLocationService) {

    const housingLocationId = Number(this.route.snapshot.params['id'])

    this.housingService.getLocactionById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    })
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
