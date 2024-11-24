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


  annualData!:  Array<string | number | RecordDataType>



  onAddInvestmentRecord(userInputData: UserInputData){


    console.log('userInputData.annualInvestment is: ' + userInputData.annualInvestment + ' with type:' + typeof userInputData.annualInvestment)
    
    console.log( 'userInputData.duration is: ' + userInputData.duration + ' with type of: ' + typeof userInputData.duration)

    console.log('userInputData.expectedReturn is: ' + userInputData.expectedReturn + ' with type of: ' + typeof userInputData.expectedReturn)
    
    console.log('userInputData.expectedReturn is: ' + userInputData.expectedReturn + ' with type of: ' +   typeof userInputData.initialInvestment)

    // console.log(userInputData)

   
    // const annualData = [];

  // let duration = Number(userInputData.duration)
  // let investmentValue = Number(userInputData.initialInvestment)
  // let expectedReturn = Number(userInputData.expectedReturn);
  // let annualInvestment = Number(userInputData.annualInvestment)
  // let initialInvestment = Number(userInputData.initialInvestment)


  // for (let i = 0; i < duration; i++) {
  //   const year = i + 1;
  //   const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //   investmentValue += interestEarnedInYear + annualInvestment;
    
  //   const totalInterest =
  //     investmentValue - annualInvestment * year - initialInvestment;
    
      
  //     console.log(`Before Push:` + '\n' + year + '\n' + annualInvestment + '\n' + investmentValue)
      
      
      
      
  //     this.annualData.push({
  //     year: year,
  //     interest: interestEarnedInYear,
  //     valueEndOfYear: investmentValue,
  //     annualInvestment: annualInvestment,
  //     totalInterest: totalInterest,
  //     totalAmountInvested: initialInvestment + annualInvestment * year,
  //   });



  // }

  

  }


  get allAnnualData(){

    return this.annualData;

  }


}
