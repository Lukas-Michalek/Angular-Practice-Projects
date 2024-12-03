import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { UserInputComponent } from './user-input/user-input.component';

import type { InvestmentInput } from './investment-input.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InvestmentResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

  //* Remember that in order to use the annualData (result of the onCalculateInvestmentResults function) I need to declare property tht will belong to app component, this property will then 'be replaced' with the result of function and could be then used by the children (investment-results component) to be used to populate the table

  // As before '?' tells TypeScript that 'resultData' may hold value but may be also undefined and that is fine

  resultData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  } [];
  
  
  
  
  //H Calculating Investment Data -> In Component Aproach

  //* Note the that each parameter needs to have proeprty type and the function needs to recive its argument in this shape! 
  
  // onCalculateInvestmentResults receives data imputted by user from user-input component in this exact form with these exact property types! These are then DESTRUCTURED later in the function to be used in the claculation, and the result is being printed in the console to see if data are correct.
 
  onCalculateInvestmentResults(data: InvestmentInput )   
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
  
   
    //* In order to use anualData from this function, I need to store it in a property of app component!
    
    this.resultData = annualData;
    
  }

  
}


