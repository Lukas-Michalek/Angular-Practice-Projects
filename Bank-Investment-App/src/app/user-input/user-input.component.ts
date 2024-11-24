import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { UserInputData } from './user-input.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment='';
  duration='';
  annualInvestment='';
  expectedReturn='';


  @Output() addInvestmentRecord = new EventEmitter<UserInputData>();

  // onSubmit() {
  //   const annualData = [];
  //   let initialInvestment = Number(this.initialInvestment)
  //   let investmentValue = Number(this.initialInvestment);
  //   let duration = Number(this.duration)
  //   let annualInvestment = Number(this.annualInvestment)
  //   let expectedReturn = Number(this.expectedReturn)
  
  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
      
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
      
  //       annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }
  
  //   console.log(annualData);
  // }

  onSubmit(){
    this.addInvestmentRecord.emit({

      initialInvestment: this.initialInvestment,
      duration: this.duration,
      annualInvestment: this.duration,
      expectedReturn: this.duration,

    })

  }
  
  }


