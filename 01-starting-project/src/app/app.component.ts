import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component"

// ! Import dummy users to app.component so it cen be set from outside of user component and from app component itself
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  users = DUMMY_USERS;

  selectedUserID = 'u1';

  // * In angular every variable needs to have initial value! Meaning, that if I would leave selectedUserID = '' this would cause errors!!!


  // Remember that app.component is one huge component! Similarly as user.component or any other. This means that If I want to pass information or value down to its children (in this case I want to make user from Dummy Users available to tasks component) I need to use getter!

  // * It is also worth noting that getter can not take any argument, and as it can be seen in this case I can make use of the value that changes (id) => use this.id as it is used within function!

  // So I will get variable that changes (id) based on user input (click) and I can then pass it to another function that is within class. As this function has access to this variable withing the function I do not need to create parameters but just use it with this in front of it

  // * AS can be seen in app.component.html, user component emits user id 

  //* => User clicks a button (which is user component) 
  
  //* => click event is called, calling userClicked() method located in user.component.ts 
  
  //* => userClicked() makes EventEmitter object called 'select' emit id that was given to user.component throug @Input from app.component
  
  //* => in order to pass this value (id) to the parent component that is app.component, (select)="onSelectUser($event)" is invoked where onSelectUser(id: string) is inside app.component.ts and event basicaly store the id and passes it to app.component.ts. This is how app.component gets the value

  //* => in order to work with this value selectedUserID variable is created at the very top of AppComponent class WITH SOME VALUE!!! IT MUST NOT BE EMPTY OR UNDEFINED!!! and this value will just keep changin if user clicks the button

  // In order to pass value from Parent to Children I am using getter

  // Remember that as tasks component is a children of app componenet it sort of has access to it I just need to 'get' it
  
  onSelectUser(id: string){
    
    // console.log("The id of this user is " + id)
       
    this.selectedUserID = id;
    
  }

 
  //***************     LESSON START      ***************/

  // ! Very important is to use '!' => Angular thinks that there is a chance that no user would be found and therefore I will get and return 'undefined' value. By using '!' I am convincing Angular that I will always get value and never 'undefined' and therefore this will not happen
  
  // * '!' Acts as a safeguard! If the user would not be found, this would cause a problem because I would be then trying to access a name property on 'undefined' value in app.component.html, [userName]="selectedUser.name"  ==>  [userName]="undefined.name" which would crash an application

  // The error would be ===> Object is possibly 'undefined'.ngtsc(2532)  => RUNTIME ERROR

  //! In other words -> '!' Rules out the possibility that I will ever get an 'undefined' value in adeuate property

  // Now by using ! I am not rulling out that there could be an undefined value, I am just convincing Angular that I as developer know that I won`t have undefined value in such a place

  //H => JUMP TO USER user.components.ts




  get selectedUser(){
   
    return DUMMY_USERS.find(user => user.id === this.selectedUserID)!
  }

}

  //***************     LESSON CONTINUE 3      ***************/

  // There might by a chance that I will not find a user in DUMMY_USERS. 
  // For example by setting users = DUMMY_USERS.slice(1,2)
  // In this case if user id would be lets say 'u4' I would get an 'undefined' value and although I have said Angular that I WILL ALWAYS get proper defined value by using '!' this would not be true.

  // * Instead, in situations where I am not 100% sure that I will have a defined value, it is often better to use "FALLBACK CODE"

  //H Continue to tasks.component.ts