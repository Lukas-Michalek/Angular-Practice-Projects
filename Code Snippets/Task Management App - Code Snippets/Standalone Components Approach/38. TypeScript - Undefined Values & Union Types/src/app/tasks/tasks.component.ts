import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  
  //* As I am getting some sort of input that is in component I need to use @Input so I can pass this to tasks.component.html
  
  @Input({required: true}) userName!: string;

  // *****     LESSON CONTINUES - 3     **********//

  // In the situations that I am not 100% Sure I will always get a defined value I can use "FALLBACK CODE"

  // One of the option would be to go to tasks.component.ts and make:  
  
  // @Input({required: true}) userName!: string ===>  @Input() userName?: string;

  //* Because if I would select a user that does not exist I wouldn`t get a name.

  // '?' now tells the Angular -> userName might not be set and I am fine with that 

  //* Because property without ! or ? gives me this error =>
  
  // ! Property 'userName' has no initializer and is not definitely assigned in the constructor.ts(2564)
  
  //  And thus TypeScript does not know wheter userName is initialized or not. By adding '?' I am telling Typescript "Yeah, It might not be initialized and that`s ok" and typescript accept it

  // * Now remember that I can only do this if it would not matter whether or not the property is undefined (for example in tasks.component.html if the value is undefined it just won`t print anything) .... Howeever

  //H -> Jump to app.component.html

  // *****     LESSON CONTINUES - 5     **********

  // If I want to use more than one possible value types I can use pipe symbol => '|' to create 'UNION TYPE'

  // *   @Input() userName: string | undefined;
  
  // It tells the TypeScript that the type of value that can be stored in this property is either of type string or type of undefined.

  // * This also works as I am telling TypeScript that is fine if the value is undefined at the beginining as it my hold value type String or it may remain undefined

  //  In other words:
  //  @Input() userName: string | undefined 
  //  Is the same as:
  //  @Input() userName: string?


}
