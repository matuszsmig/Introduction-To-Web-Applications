import { Injectable } from '@angular/core';
import { Trip } from './model/trip';
import { Trips } from './model/trips';
import data from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  myData: Array<Trip> = data.options;

  getTravels(): Array<Trip>{
    return this.myData
  }


}
