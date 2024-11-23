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

  //*****     Lesson Start     *****/
  
  // selectedUserID = 'u1';

  // If there will be an element that will be rendered only under certain circumstances I can declare variable without initial value, in which case I need to declare the Type of Value it will hold together with '?' to tell the TypeScript that it is find that it might not be set!

  //! Error => Property 'selectedUserID' has no initializer and is not definitely assigned in the constructor.ts(2564) => means that I did not tell TypeScript that:
  // 1. '?' It is fine if it won`t be set
  // 2. '!' I will definitely set it!

  selectedUserID?: string;
 
  onSelectUser(id: string){
    
       
    this.selectedUserID = id;
    
  }

 




  get selectedUser(){
   
    return DUMMY_USERS.find(user => user.id === this.selectedUserID)!
  }

}

