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


  annualData(annualDataReceived: any[]){

    console.log('These are the data received ' + annualDataReceived)
  }
  
  

  }



