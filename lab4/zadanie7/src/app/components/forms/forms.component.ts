import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Trip } from 'src/app/model/trip';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  @Output() emitTrip =  new EventEmitter<Trip>();
  @Output() close = new EventEmitter<boolean>();

  constructor(private formBuilder : FormBuilder) {}

  validationNotDone: boolean = false;

  pressedX(){
    this.close.emit(false);
  }
 
  newForm: FormGroup = this.formBuilder.group({
    title: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    begins: new FormControl('', Validators.required),
    ends: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.pattern("(^[1-9]?[0-9]+)")]),
    amount: new FormControl('', [Validators.required, Validators.pattern("(^[1-9]?[0-9]+)")]),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required)
  });
  
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

  onSubmit(form: FormGroup): void {

    if (this.checkDates(form.value.begins,form.value.ends)){
      if(form.valid){
        this.validationNotDone = false;
      let singleTrip: Trip = {
        title: form.value.title,
        country: form.value.country,
        begins: form.value.begins,
        ends: form.value.ends,
        price: parseInt(form.value.price),
        amount: parseInt(form.value.amount),
        peopleLeft: 0,
        description: form.value.description,
        image: form.value.image
      }

      this.emitTrip.emit(singleTrip);

      this.newForm.reset();
  }} else {
    this.validationNotDone = true;
  }

  };

}
