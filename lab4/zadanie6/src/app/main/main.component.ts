import { Component, Input, Output, EventEmitter} from '@angular/core';
import { ITopic } from '../model/itopic';
import { ITopics } from '../model/itopics';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() displays: any = 0;
  @Output() przeslij =  new EventEmitter<ITopic>();

  learnMore(i:any){
    this.przeslij.emit(i);
  }
}
