
// * To be able to set the property from outside (in this case from app.component) I need to use and Input decorator -> @Input

// * To be able to use this decorator first I need to import it in @angular/core'

import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{

  // * As Input is already imported above I can now use Input decorator @Input to be able to set the property from outside of this component(form app coponent itself as can be seen ) => This marks the property of avatar as settable from outside

  // * I am enabling to set avatar image
  // ! Do not forget that Input needs to be executed as a Function!
  
  // * Each Input property also needs a type of value(i.e. String)
  
  // ? Property 'avatar' has no initializer and is not definitely assigned in the constructor. To remedy this I need to use @Input() avatar!: string; => where ! means that avatar property will definitely be set to some value even though angular can`t see that in this code just yet (user.components.ts). And in this case it will be assigned from otside, meaning app.component.html

  // * Adding {required: true} will make sure to show an error in IDE in case I would forgot to add value. This is a safeguard against errors. Because although @Input() avatar!: string will tell avatar property that it will be set, if I would forget to add value, the program still runs and I will get blank space but no error. This makes it a bit more difficult to spot
  
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar
  }


  onSelectUser() {

  }

}




