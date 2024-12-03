import { Component, signal } from '@angular/core';
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

  //* Remember that in order to use the annualData (result of the onCalculateInvestmentResults function) I need to declare property that will belong to app component, this property will then 'be replaced' with the result of function and could be then used by the children (investment-results component) to be used to populate the table

// H ------------------------- USING SIGNALS -----------------------------------------

  //* When using signals, property initilization is slightly different

  // Change-Detection:
  
  // resultData?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // } [];

  // * Signals:
  // Property needs and initial value, that could be initially undefined, but at the end I want to store there different value

  /*  Syntax: property = signal<{ Datatype [] | undefined }>(undefined);
      is in TypeScript the way to define two possible types for the given value (not that this is the xact syntax for an array)

      * With this I am telling the angular that this signal (resultsData) will hold an array full of objects that has the shape specified or an undefined value
  */ 
  
  resultData = signal<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  } [] | undefined >(undefined);
  
  
  
  
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

    // As I am using signals now (resultData is now signal), this syntax is no longer valid and I need to use a special set method
    // this.resultData = annualData;

    this.resultData.set(annualData)

    
  }

  
}


