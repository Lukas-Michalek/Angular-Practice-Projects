
import { Component, Input, EventEmitter, Output } from '@angular/core';


//* Now I need to import the user model. It is a good practice to make it clearer to include type as well
import { type User} from "./user.model";



  // I can create ALIAS by using 'type' keyword which is a keyword made available by TypeScript
  
  // * The convention is to starta Alias with upper case

  // type User = {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }; 

  // now I can use this alias in every space this is expected

  // * Another way is to create an INTERFACE, which is another TypeScript feature 

  // An Interface is simply another way of defining object type

  // interface User {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // }; 

  //* The difference between type and interface is that with interface I am only able to define Object type, where with type I can also define other types

  // It is a good practice to 'outsource' data models (such as user or task) to different files with naming convention user.model.ts for example and then import them to files that are needed. So for user that would be file in user folder with the name user.model.ts

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{



  @Input({required: true}) user!: User; 

  // Remember! By using 'user!' I am convincing TypeScript that value will be defined! And by adding {required: true} will make sure to show an error in IDE in case I would forgot to add value and therefore there will be undefined at the end. This is a safeguard against errors. 



  @Output() select = new EventEmitter<string>();


// Of course by using object type I need to adjust the code accordingly

  get imagePath(){
    // return 'assets/users/' + this.avatar
    return 'assets/users/' + this.user.avatar
  }


  userClicked() {

    // this.select.emit(this.id);
    this.select.emit(this.user.id);

    
  }

}




