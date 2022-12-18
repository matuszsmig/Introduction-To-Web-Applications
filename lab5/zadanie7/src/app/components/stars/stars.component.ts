import { Component , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {

  @Output() przeslij =  new EventEmitter<number>();

  elementStars: number = -1;
  isRated: boolean = false;

  ratedStars: number = -1;

  ratedObject(stars: number){
    this.ratedStars = stars;
    this.isRated=true;
    this.przeslij.emit(this.ratedStars);
  }

  rateObject(itr: number): void{
    this.elementStars=itr;
  }

  disrateObject(){
    this.elementStars=-1;
  }

}
