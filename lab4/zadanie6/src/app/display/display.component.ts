import { Component } from '@angular/core';
import data from '../../assets/data.json';
import { ITopic } from '../model/itopic';
import { ITopics } from '../model/itopics';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  jsonData: ITopics = data;
  title: string = "";
  long: string = "";

  getSignal(event:any){
    this.title = this.jsonData.topics[event].title;
    this.long = this.jsonData.topics[event].long;
  }
}
