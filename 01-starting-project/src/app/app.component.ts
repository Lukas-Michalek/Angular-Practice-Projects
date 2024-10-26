import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";

// ! Import dummy users to app.component so it cen be set from outside of user component and from app component itself
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  users = DUMMY_USERS;



  // Remember that user.component is a button with id, name, alt, src properties that does something when it is clicked.
  // * By clicking on user.component button (under app-user selector) I am emitting the id of the user through "select" to its parent component that is app.component (under app-root selector)
  // this id is used as a paramater in onSelectUser function. It is important to add parameter type as well

  onSelectUser(id: string){

    console.log("The id of this user is " + id)

  }

}
