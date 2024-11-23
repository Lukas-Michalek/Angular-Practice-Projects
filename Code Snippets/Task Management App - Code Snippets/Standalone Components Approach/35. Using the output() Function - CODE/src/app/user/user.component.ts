

//- First I need to import the Output decorator and EventEmitter object from angular/core

// There is a more modern alternative on how to output / emit data not using @Output (output decorator) but instead using:
// * output function imported from @angular/core

import { Component, Input, output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{

  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // * To be able to "Emit"(create Output) custom event from custom component an Output variable needs to be crated.
  //  Note that the UserComponent is only responsible for emitting the user element. Everything else (let's say I click on the user element) will be emitted by the AppComponent itself. Therefore, the information that the user was clicked must be passed from the UserComponent to the AppComponent, as it is the AppComponent that is displaying the user and can subsequently output the tasks for that user next to the unordered list <ul id="users">

  //  So I need to let the AppComponent know when the user is clicked (specifically, when the button in the UserComponent is clicked).

  // There is already a click listener on the button ((click)="onSelectUser()"), but now I need to output that information to indicate that the button was clicked.
  //* And it will be done with Output properties

  // Unlike Input, Output will receive an initial value assigned with =, and that initial value is a new EventEmitter Objecte

  // * EventEmitter object will allow me to emit custom values through the select property to any parent component that is interested. In this case it is onSelectUser, which is the function that is trigger when we clicked the button 
  
  // @Output() select = new EventEmitter();

  // * the more modern method is using output function. Everything works in the same way, the only difference is that EventEmitter() object is created 'under the hood' (and thus I don`t have to create it on my own) and the code takes less space.
  
  // * It is also important to understand that this output() function does not create any kind of signal at all, and select is still and event emitter and not the signal! Unlike the input function which did create input signal. output() just give me a custom event that I can emit!


  // Also do not forget to specify the data type I will be emitting
  select = output<string>();


  get imagePath(){
    return 'assets/users/' + this.avatar
  }


  
  // To use the onSelectProperty I need to use emit function to emit a new value I got in select
  // * Now I need to pass the value that should be emitted to this emit method which is provided by the EventEmitter() object which is stored in select

  //  I do not need to set a value to emit() if I do not want to 

  //* I can for example emit the id value because I received it as an Input and I pass it back to the Parent Componnent whenever the user is selected.

  // ==> Now I need to go to app component and set the ID there
  
  
  // * I will click the button (user.component), (click) = "onSelectUser()" event is called and through that the function below. 
  // What this function does, it emits the content of this.id that is assigned in app.component.html to each user.component to "select" output which through event binding passes the id to parrent component app.component.
  //* In app.component is then called the function onSelectUser(id: string) which outputs the id in the console => console.log("The id of this user is " + id) 
  
  onSelectUser() {

    this.select.emit(this.id);

  }

}




