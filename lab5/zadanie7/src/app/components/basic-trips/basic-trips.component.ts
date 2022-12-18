import { Component , OnInit} from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { Trips } from 'src/app/model/trips';
import { Subscription } from 'rxjs';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-basic-trips',
  templateUrl: './basic-trips.component.html',
  styleUrls: ['./basic-trips.component.css']
})
export class BasicTripsComponent implements OnInit{

  constructor(private cartServ: MyserviceService) { }

  myData!: Array<Trip>;

  counter: number = 0;

  showForms: boolean = true;
  showCart: boolean = false;

  ngOnInit(): void {
    this.myData = this.cartServ.getTravels()
    this.counter = this.checkCounter();
  }

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
    for (let item of this.myData){
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
    for (let item of this.myData){
      if (item.amount-item.peopleLeft != 0 ){
        if (item.price<cheap || cheap==0){
          cheap = item.price;
        }
      }
    }
    return cheap;
  }

  checkCounter(){
    let counterrr: number = 0;
    for (let item of this.myData){
      if (item.peopleLeft != 0 ){
        counterrr+=item.peopleLeft;
      }
    }
    return counterrr
  }

  addPerson(item: any){
    item.peopleLeft+=1;
    this.counter = this.checkCounter();
  }

  deletePerson(item: any){
    item.peopleLeft-=1;
    this.counter = this.checkCounter();
  }

  deleteThis(i: number, item: any){
    this.counter-=item.peopleLeft;
    this.myData.splice(i,1);
  }

  getMyOutput(myForm: Trip){
    this.myData.push(myForm);
  }

}
