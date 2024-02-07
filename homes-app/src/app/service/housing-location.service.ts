import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housing-location'
import dataBaseHouseLocation from '../data/database';

@Injectable({ //Permite que classe possa ser usada (injetada) no servi?o de inge??o de dependencias.
  providedIn: 'root'
})
export class HousingLocationService {

  url = 'http://localhost:3000/locations';

  constructor() {
  }

  /**
   * @description returns all houselocation of database
   * @function getAllHousingLocation
   * @returns {housingLocationList} all locations of database
   */
  async getAllHousingLocation(): Promise<HousingLocation[]> {

    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  /**
   * @description returns especific houselocation by id
   * @function getLocactionById
   * @returns {HousingLocation | undefined} returns HousingLocation of the id
   * @example getLocactionById(0)
   */
  async getLocactionById(id: Number): Promise<HousingLocation | undefined> {

    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {}
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
  }
}
