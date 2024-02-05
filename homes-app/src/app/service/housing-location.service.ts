import { Injectable } from '@angular/core';
import { HousingLocation } from '../interface/housing-location'
import dataBaseHouseLocation from '../data/database';

@Injectable({ //Permite que classe possa ser usada (injetada) no servi?o de inge??o de dependencias.
  providedIn: 'root'
})
export class HousingLocationService {

  protected housingLocationList: HousingLocation[] = []

  constructor() {

    this.housingLocationList = dataBaseHouseLocation;
  }

  /**
   * @description returns all houselocation of database
   * @function getAllHousingLocation
   * @returns {housingLocationList} all locations of database
   */
  getAllHousingLocation(): HousingLocation[] {

    return this.housingLocationList;
  }

  /**
   * @description returns especific houselocation by id
   * @function getLocactionById
   * @returns {HousingLocation | undefined} returns HousingLocation of the id
   * @example getLocactionById(0)
   */
  getLocactionById(id: Number): HousingLocation | undefined {

    return this.housingLocationList.find(housingLocation => (
      housingLocation.id === id
    ));
  }
}
