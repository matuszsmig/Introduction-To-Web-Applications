import { Component, Input, Output, EventEmitter, DoCheck} from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { Trips } from 'src/app/model/trips';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements DoCheck{
  @Input() share !: Trips;
  @Output() closeCart = new EventEmitter<boolean>();

  closedCart(){
    this.closeCart.emit(false);
  }

  fullSum: number = 0;

  ngDoCheck() {
    let sum: number = 0;
    for (let item of this.share.options){
      if (item.peopleLeft>0){
        sum+=item.peopleLeft*item.price;
      }
    }
    this.fullSum=sum;

  }

}
