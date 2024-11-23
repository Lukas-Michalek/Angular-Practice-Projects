import { Component, EventEmitter,Output, signal, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  // H *** Alternate Dependency Injection 2 *** //

  // As I am using services and not onAddTask function in tasks.component.ts, I need to Input userID from the parrent component that is tasks.component.ts. User ID is being emited from user.component.ts to app.component.ts and because new-task.component is the children of app.component, it can access user.id through @Input

  @Input({ required: true}) userId!: string;




  // User clicks on backdrop or Cancel button, event is being emitted that will send no data -> VOID

  //   @Output() cancel = new EventEmitter<void>();

  // h *** Alternative Dependency Injection Mechanism ***
  //* As I still want that the new task dialogue gets closed whenever I submit the for, I still wnat to use this Event emitter - I just need to rename it to get a more universal name
  @Output() close = new EventEmitter<void>();

  // I will be submitting data to the parent component (tasks.component.ts) that manages all tasks -> I want to add task to this array and thus I need to emit or pass these data in the form of object to tis parent.

  // * I have 2 options here. I can either just specify all the keys here or I can create new data type (in this case NewTaskData) and outsorce it to new file (in this case task.model.ts). For obvious reasons the second method is considered to be a best practice!
  
  // @Output() add = new EventEmitter< {
  //   title: string;
  //   summary: string;
  //   date: string;
  // } >
  
  // H *** Alternative Dependency Injection Mechanism ***
  // As I no longer needs to emit add event emitter to its parent - tasks.component, I not longer needs (add) event emitter
  
  // @Output() add = new EventEmitter<NewTaskData>(); 
  
   
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

    this.close.emit();

  }

  // * Now that I have two-way binding that populate enteredDate, enteredSummary, enteredTitle, I can use these properties in onSubmit() to construct a new task

  // I will let the TasksComponent (which manages all the tasks), know about  that new task data has been submitted, so this task can be added to task array and to close the dialogue by setting this.isAddingTask to FALSE

  // * As I want to create new task, capture all input from user, and then save it in tasks array stored in tasks.component.ts, I need to emit these data from this component (new-task.ts) to its parent - tasks.component.ts 


  // H *****     Alternative Dependency Injection Mechanism     *****

  // In order to demostrate another use of Alternative Dependency Injection Mechanism, I am going to update onSubmit Method making use of services from tasks.services.ts => class TasksService

  //* In this approach I instead of using constructor I can initialize to a value that is created with help of the inject function (that needs to be imported from '@angular/core')

  // inject function injects a dependancy and provides it as a value for property tasksService

  // * So I do not instantiate class TasksService in a construnctor but rather use it as an injection token that is passed to an inject function

  private tasksService = inject(TasksService)
  
  
  onSubmit () {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate 
    }, 
      this.userId
    );

    this.close.emit();
  }
  



  // * Old version not using Services
  // onSubmit () {
  //   this.add.emit({     
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate,
     
  //   })
  // }


}
