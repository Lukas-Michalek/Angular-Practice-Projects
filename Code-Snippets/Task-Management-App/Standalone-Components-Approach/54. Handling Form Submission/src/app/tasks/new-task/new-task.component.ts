import { Component, EventEmitter,Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  // User clicks on backdrop or Cancel button, event is being emitted that will send no data -> VOID

  @Output() cancel = new EventEmitter<void>();


    // * To use 2 ways binding (so I can get input value from title, summary and date) I will start by adding a property for each with empty initial value

  //! As can be seen TypeScript correctly infers the type of value that is String and so I do not (and should not) add type myself

  // I also do not need @Input or @Output as these properties will be used only inside this component (new-task.component.ts)
 
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  // ********  ==> If I want to use signals instead, the only thing that needs to change is the way I declare the variables. Everything else remains the exactly same! 

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');





  onCancel(){

    this.cancel.emit();

  }

  onSubmit () {
    console.log('Form Submitted!') 
  }


}
