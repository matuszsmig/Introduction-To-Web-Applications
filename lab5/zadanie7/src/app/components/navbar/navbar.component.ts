import { Component, DoCheck, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck, OnInit {

  constructor(private cartServ: MyserviceService) { }

  myData!: Array<Trip>;

  ngOnInit(): void {
    this.myData = this.cartServ.getTravels()
  }

  singleTripMain: number = 0;
  pickedMain: number = 0;

  ngDoCheck():void {
    let singleTrip: number = 0;
    let picked: number = 0;
    for (let item of this.myData){
      if (item.peopleLeft>0){
        singleTrip+=1;
        picked+=item.peopleLeft;
      }
    }
    this.singleTripMain = singleTrip;
    this.pickedMain = picked;
    this.daysLeft();
  }

  info: boolean = false

  now = new Date().toLocaleDateString();
  nowDay = this.now.substring(0,2)
  nowMonth = this.now.substring(3,5)
  nowYear = this.now.substring(6,10)
  thisDay: string = this.nowYear + "." + this.nowMonth + "." + this.nowDay

  checkDates(dataOne: string, dataTwo: string){
    let yearOne: number = parseInt(dataOne.substring(0,4));
    let monthOne: number = parseInt(dataOne.substring(5,7));
    let dayOne: number = parseInt(dataOne.substring(8,10));

    let yearTwo: number = parseInt(dataTwo.substring(0,4));
    let monthTwo: number = parseInt(dataTwo.substring(5,7));
    let dayTwo: number = parseInt(dataTwo.substring(8,10));

    if(yearTwo>yearOne){
      return true;
    } else if (yearTwo==yearOne){
      if (monthTwo>monthOne){
        return true;
      } else if (monthTwo==monthOne){
        if (dayTwo>=dayOne){
          return true;
        } else {
          return false;
        }
      } else{
        return false;
      }
    }
    return false;

  }

  remember: string = "";

  daysLeft(): void{
    let tripp: string = "9999.12.99";
    for (let item of this.myData){
      if (item.bought>0 && this.checkDates(this.thisDay, item.begins)){
        this.info = true;
        if (item.begins, tripp){
          tripp=item.begins
        }

      }
    }
    this.remember=tripp
  }

}
