import { Component, OnInit} from '@angular/core';
import data from '../../../assets/data.json';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  selectedBrand!: string;
  selectedModel!: string;
  selectedColor!: string;
  jsonData: any;
  chosenColor!: string;

  showBrands = false
  showModels = false
  showColors = false
  showCar = false


  ngOnInit(): void {
    fetch('../../../assets/data.json').then(res => res.json())
    .then(json => {
      this.jsonData = json
      this.showBrands=true
    });
  }

  chosenBrand(){
    this.showModels = true
    this.showCar = false
    this.showColors = false
  }

  chosenModel(){
    this.showColors = true
    this.showCar = false
  }

  choseColor(color: string){
    this.showCar = true
    this.chosenColor = color;
  }

}
