import { Component } from '@angular/core';
import data from '../../../assets/data.json';
import { Trips } from 'src/app/model/trips';
import { Trip } from 'src/app/model/trip';

@Component({
  selector: 'app-basic-trips',
  templateUrl: './basic-trips.component.html',
  styleUrls: ['./basic-trips.component.css']
})
export class BasicTripsComponent {
  jsonData: Trips = data;
  title: string = "";
  country: string = "";
  begins: string = "";
  ends: string = "";
  price: number = 0;
  amount: number = 0;
  peopleLeft: number = 0;
  description: string = "";
  image: string = "";

  counter: number = 0;

  showForms: boolean = false;
  showCart: boolean = false;


  showMyForms(){
    this.showForms = true;
  }

  showMyCart(){
    this.showCart = true;
  }

  closeForms(close: boolean): void{
    this.showForms = close;
  }

  closeMyCart(close: boolean): void{
    this.showCart = close;
  }

  getTheMostExpensive(){
    let expensive: number = 0;
    let remember: any;
    for (let item of this.jsonData.options){
      if (item.amount-item.peopleLeft != 0 ){
        if (item.price>expensive){
          expensive = item.price;
          remember = item;
        }
      }
    }
    return remember.price;
  }

  getTheCheapest(): number{
    let cheap: number = 0;
    for (let item of this.jsonData.options){
      if (item.amount-item.peopleLeft != 0 ){
        if (item.price<cheap || cheap==0){
          cheap = item.price;
        }
      }
    }
    return cheap;
  }

  addPerson(item: any){
    item.peopleLeft+=1;
    this.counter+=1;
  }

  deletePerson(item: any){
    item.peopleLeft-=1;
    this.counter-=1;
  }

  deleteThis(i: number, item: any){
    this.counter-=item.peopleLeft;
    this.jsonData.options.splice(i,1);
  }

  getMyOutput(myForm: Trip){
    this.jsonData.options.push(myForm);
  }

}
