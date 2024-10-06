// * To create a signal first I need to import it from angular core
import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { computeMsgId } from '@angular/compiler';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// randomIndex generates random number from 0 - DUMMY_USERS.length

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

// Using Angulars State Change Management
// export class UserComponent {

//   // * This uses zone.js part of Angular where states changes automatically
//    selectedUser = DUMMY_USERS[randomIndex]
 
//   // Getter to get cleaner use of property binding
//   get imagePath () {

//     return 'assets/users/' + this.selectedUser.avatar

//   }

//   // Event Listener for button
//   onSelectUser () {


//     // console.log('Clicked')

//   /**
//    * const randomIndex is a locally scoped constant that is ONLY available inside of onSelectUser and that overrides the global const randomIndex, and the randomIndex is recalculated every time the function onSelectUser(when we click) is run
//    * 
//    * ! Note that Since I am referring to that selectedUser property from INSIDE THE CLASS instead of from INSIDE THE TEMPLATE as I did before I need to add 'this' to the property.

//    */
    
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    
//     // * This is how can state be changed without using signal
//     // this.selectedUser = DUMMY_USERS[randomIndex]





//   }

// }

// export class UserComponent {

//   // * This uses zone.js part of Angular where states changes automatically
//    selectedUser = DUMMY_USERS[randomIndex]
 
//   // Getter to get cleaner use of property binding
//   get imagePath () {

//     return 'assets/users/' + this.selectedUser.avatar

//   }

//   // Event Listener for button
//   onSelectUser () {


//     // console.log('Clicked')

//   /**
//    * const randomIndex is a locally scoped constant that is ONLY available inside of onSelectUser and that overrides the global const randomIndex, and the randomIndex is recalculated every time the function onSelectUser(when we click) is run
//    * 
//    * ! Note that Since I am referring to that selectedUser property from INSIDE THE CLASS instead of from INSIDE THE TEMPLATE as I did before I need to add 'this' to the property.

//    */
    
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    
//     // * This is how can state be changed without using signal
//     // this.selectedUser = DUMMY_USERS[randomIndex]





//   }

// }

// Using Signals
export class UserComponent{

  selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  onSelectUser () {

    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser.set(DUMMY_USERS[randomIndex]);

  }


}




