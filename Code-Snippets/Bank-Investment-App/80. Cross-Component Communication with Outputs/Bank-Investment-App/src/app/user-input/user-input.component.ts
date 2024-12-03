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

  //* To pass that user input data captured in two way binding to the parent component where all the calculation (for this version) are going to take place, I need to emit it them by using EvenEmitter with the exact shape and the exact types of variables (string, number, ...) of the properties the emitter will emit.

  
  @Output() calculate = new EventEmitter<{

    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
  }>();
  
  enteredInitialInvestment='';
  enteredDuration='';
  enteredAnnualInvestment='';
  enteredExpectedReturn='';

  

  //* The important thing to notice here is that every input from user will always be in the form of String. However, for calculations I need the type of Number.

  //! To transform STRING to NUMBERS in Angluar I can use + sign as can be seen below.

  // So that even though this.enteredInitialInvestment is in the form of String, I am transforming it to numbers and EventEmitter calculate will indeed emit Numbers at the end
  
  onSubmit() {

  this.calculate.emit({
    

      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
  
  })
   
  }

  
  }


