import { Component, Input, input } from '@angular/core';

//  In order to use currency pipe it needs to be imported from @angular/common and then added to imports arra o the component where it will be used
import { CurrencyPipe } from '@angular/common'

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

// To have the values from user input avaialable here I can achieve this by accpeting an 'Input' 

//* 'Input' ===> Bindable property that is exposed by this component to its parent component, so that the parent component can pass data into this component

// I have 2 approaces available here:

//* First Approach using signals:
/* results = input<{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  } >()
*/

//* Second Approach:

  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  } []; 

  // 
  // !!!! The type of the object I am 'inputting' from the parent component (app component) needs to be a whole array of the objects (annualData) NOT a Single Object! I am sending the whole computet array here! To tell the TYpeScript that the type of results is array, full of the object of the Types above. This is the syntax I need ==>  
  
/*  @Input() results?: {
    
      propertyA: number;
      propertyB: string;
    
    } [];
*/

  // ===> results property may not always get values and thus be undefined (?), and when there will be values, it will be an array filled with the objects of type: {propertyA: number; propertyB: string;}
  
  //* This means that the syntax for sending ARRAY as Input is:
  //* @Input() results:

  // Do not forget that I need to add :
  // '!' Always a Value (if I am absolutely sure that I will always receive a value)
  // '?' Optional Property (if there is a chance that no value might be received, as for example is the case now, as user might just click 'Calculate' button without adding any data and thus the property of 'results' would be 'undefined')

  //* The error would be ===> Property 'results' has no initializer and is not definitely assigned in the constructor.





}
