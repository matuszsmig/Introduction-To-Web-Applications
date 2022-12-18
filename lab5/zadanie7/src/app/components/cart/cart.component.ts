import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private cartServ: MyserviceService) { }

  myData!: Array<Trip>;

  ngOnInit(): void {
    this.myData = this.cartServ.getTravels()
    this.DoCheck();
  }


  fullSum: number = 0;

  DoCheck() {
    let sum: number = 0;

    for (let item of this.myData){
      if (item.peopleLeft>0){
        sum+=item.peopleLeft*item.price;
      }
    }
    this.fullSum=sum;
    
    this.fullSum=sum;

  }

  buy(){
    for (let item of this.myData){
      if (item.peopleLeft>0){
        item.amount -= item.peopleLeft;
        item.bought += item.peopleLeft;
        item.peopleLeft = 0;
        this.fullSum=0
      }
    }
  }

}
