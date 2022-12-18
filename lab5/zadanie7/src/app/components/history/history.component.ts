import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/trip';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  constructor(private cartServ: MyserviceService) { }

  myData!: Array<Trip>;

  selected: string = "nic";
  isSelected: boolean = true;

  updatePageSize(option: any){
    console.log(option)
    this.selected = option;
    this.isSelected = false;
    if (option == ""){
      this.isSelected = true;
    }
  }

  myOptions: Array<String> = ["", "Oczekiwania na rozpoczęcie", "Aktywna", "Archiwalna"]

  ngOnInit(): void {
    this.myData = this.cartServ.getTravels()
    this.checkStatus()
  }

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

  checkStatus(){
    for (let item of this.myData){
      if (item.bought>0){
        if (this.checkDates(this.thisDay, item.begins)){
          item.status = "Oczekiwania na rozpoczęcie"
        } else if (this.checkDates(item.begins, this.thisDay) && this.checkDates(this.thisDay, item.ends)){
          item.status = "Aktywna"
        } else {
          item.status = "Archiwalna"
        }
      }
    }
  }
  

}
