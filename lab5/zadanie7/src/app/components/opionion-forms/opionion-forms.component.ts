import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { IOpinion } from 'src/app/model/iopinion';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-opionion-forms',
  templateUrl: './opionion-forms.component.html',
  styleUrls: ['./opionion-forms.component.css']
})
export class OpionionFormsComponent {

  @Output() emitOpinion =  new EventEmitter<IOpinion>();

  constructor(private formBuilder : FormBuilder) {}

  validationNotDone: boolean = false;

  newForm: FormGroup = this.formBuilder.group({
    nick: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z0-9]{3,20})")]),
    title: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z]{5,20})")]),
    opinion: new FormControl('', [Validators.required, Validators.pattern("([a-zA-Z0-9]{50,500})")]),
    begins: new FormControl()
  });

  onSubmit(form: FormGroup): void {
    
      if(form.valid){
        this.validationNotDone = false;
      let singleTrip: IOpinion = {
        nick: form.value.nick,
        title: form.value.title,
        opinion: form.value.opinion,
        begins: form.value.begins
      }

      this.emitOpinion.emit(singleTrip);

      this.newForm.reset();
  } else {
    this.validationNotDone = true;
  }

  };

}
