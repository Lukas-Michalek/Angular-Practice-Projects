import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type   UserInputData } from './user-input.model';
import { type RecordDataType } from './user-input.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment='';
  enteredDuration='';
  enteredAnnualInvestment='';
  enteredExpectedReturn='';

  

  onSubmit() {

    console.log('FORM Submitted!');
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredAnnualInvestment)
    console.log(this.enteredDuration)
    console.log(this.enteredInitialInvestment)
   
  }

  
  }


