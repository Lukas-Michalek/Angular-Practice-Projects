
// - To be able to set the property from outside (in this case from app.component) I need to use and Input decorator -> @Input

// - To be able to use this decorator first I need to import it in @angular/core'

// * To accept a signal as an input I need to insert 'input' function from @angular/core
// * Input with capital I is a decorator while input whith lower case i is a special function

import { Component, Input, input, computed } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{

  // - As Input is already imported above I can now use Input decorator @Input to be able to set the property from outside of this component(form app coponent itself as can be seen ) => This marks the property of avatar as settable from outside

  // - I am enabling to set avatar image
  // - Do not forget that Input needs to be executed as a Function!
  
  // - Each Input property also needs a type of value(i.e. String)
  
  // - Property 'avatar' has no initializer and is not definitely assigned in the constructor. To remedy this I need to use @Input() avatar!: string; => where ! means that avatar property will definitely be set to some value even though angular can`t see that in this code just yet (user.components.ts). And in this case it will be assigned from otside, meaning app.component.html

  // - Adding {required: true} will make sure to show an error in IDE in case I would forgot to add value. This is a safeguard against errors. Because although @Input() avatar!: string will tell avatar property that it will be set, if I would forget to add value, the program still runs and I will get blank space but no error. This makes it a bit more difficult to spot
  
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // * Signal Unput Approach
  
  // Instead of adding decorator in front of property, I am now assigning the initial value to these properties, and that value is the result of calling that import function. That internatlly tells angular that this avatar property should be an input to this component, so that it should be settable as an atribute when the component is used.
  
  // I can also assign a default value which will be assumed if no input value has be received => avatar = input("");
  // * avatar = input(); => Initial Value is undefined
  // * avatar = input<string>(); => Telling angular that STRING value will eventually be 
  // * avater = input.required(); => I CAN NOT PASS AN INITIAL VALUE! As I am telling the angular that the input will be provided!
  // * avater = input.required<string>() => I am telling Angular that input of type STRING will be required(provided)

  // Notice that we no longer need ! as previously!
  avatar = input.required<string>();
  name = input.required<string>();

  // get imagePath(){
  //   return 'assets/users/' + this.avatar
  // }

  // As I am now using Signals as Inputs I need use COMPUTED FUNCTION instead of getter
  // ! DO NOT FORGET TO EXECUTED this.avatar() AS A FUNCTION TOO
  imagePath = computed(() => {

    return 'assets/users/' + this.avatar()

  })

  // * The disadvantage is that I cannot change the values from inside this function, but onle from outside.

  // * For example =>  onSelectUser() {
  // *  this.avatar.set(DUMMY_USERS[randomIndex]);  => Would not work as I am trying to set it from inside the function!
  // *  }
  // * The reason is that these singnals are READ ONLY and thus cna be changed only from outside!


  onSelectUser() {

  }

}




