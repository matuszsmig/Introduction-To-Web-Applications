import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Trip } from 'src/app/model/trip';
import { IOpinion } from 'src/app/model/iopinion';
import { MyserviceService } from 'src/app/myservice.service';

@Component({
  selector: 'app-single-trip',
  templateUrl: './single-trip.component.html',
  styleUrls: ['./single-trip.component.css']
})
export class SingleTripComponent implements OnInit {

  nick: string = "";
  title: string = "";
  opinion: string = "";
  begins: string = "";

  constructor(private route: ActivatedRoute, private cartServ: MyserviceService){}

  private subscription: Subscription | undefined
  
  myData!: Array<Trip>;
  myOpinions: Array<IOpinion> = [];

  idOfTravel: number = -1

  ngOnInit(): void {
    this.myData = this.cartServ.getTravels()
    this.subscription = this.route.params.subscribe(params => {
      this.idOfTravel = params['id']
    })
  }

  addPerson(item: any){
    item.peopleLeft+=1;

  }

  deletePerson(item: any){
    item.peopleLeft-=1;

  }

  startId: number = 0;

  nextphoto():void{
    this.startId+=1;
    console.log(this.myOpinions);
  }

  star: number = -1;

  getSignal(event:any){
    for (let item of this.myData){
      if (item.id==this.idOfTravel){
        item.stars = event
      }
    }
    this.star = event;
  }

  getOpinion(event : any){
    this.myOpinions.push(event);
  }

}
