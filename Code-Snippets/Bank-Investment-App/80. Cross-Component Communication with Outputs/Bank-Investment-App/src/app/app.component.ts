import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

import { type UserInputData } from './user-input/user-input.model';

import { type RecordDataType } from './user-input/user-input.model'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  //H Calculating Investment Data -> In Component Aproach

  //* Note the that each parameter needs to have proeprty type and the function needs to recive its argument in this shape! 
  
  // onCalculateInvestmentResults receives data imputted by user from user-input component in this exact form with these exact property types! These are then DESTRUCTURED later in the function to be used in the claculation, and the result is being printed in the console to see if data are correct.
 
  onCalculateInvestmentResults(data: {

    initialInvestment: number;
    duration: number;
    annualInvestment: number;
    expectedReturn: number;
})   
  {

    //!!! To unpack the data I am using JavaScript DESTRUCTURING
    
    const { initialInvestment, duration, annualInvestment, expectedReturn } = data;

    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      
        annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    console.log(annualData);
  }

  
}


