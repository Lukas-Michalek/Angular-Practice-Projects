import { Component, Input,} from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTaskData } from './task/task.model';

import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userName!: string;
  @Input({ required: true}) userId!: string;

  // We also need an extra property which controls whether this new-task component is visible or not
  
  // * By setting the property to 'false' Angular knows that it will be of the type boolean so I do not have to (and should not!) add the value type.
  
  // ! Do not do => isAddingTask: boolean = false; as it is not recommended if the inferred type is the correct type

  // isAddingTask is set to false initially but will be changed in onStartAddTask() function

  isAddingTask = false;

  
  // H *****     Services     ***** //
  // When working with Angular it is considered a good practice to keep the Components and their classes as lean as possible, and managing the data which are being used by multiple components (for example NewTaskComponent adds a task, Task component deletes the task). In situations like this it is recommended that I should use a service for managing this data.


  // ! As I am not using services, tasks array is managed from there
  // tasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary: 'Learn all the features of Angular and how to apply them.',
  //     dueDate: '2025-12-21',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build First Prototype',
  //     summary: 'Build a first prototype of online shop website',
  //     dueDate: '2024-12-21',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare Issue Template',
  //     summary: 'Prepare the issue templapte that will help outline project issues.',
  //     dueDate: '2026-11-11',
  //   }
  // ]


// As TasksService is a class and therefore Blueprint for an object, in order to interact with it and use in methods below, I need to instantiate this service first


// H *****     Dependency Injection     ***** //
// Dependency Injection is a mechanism that is being used in conjunction with services.
// The idea is that I do not create this instance (private taskService = new TasksService())on my own, but instead I tell Angular that I need such an instance and I let Angular create it. And therefore Angular can create this instance once, and I can then use this one instance in different components, and therefore I would be operating on the same data.

// * To tell Angular that I need such an instance I will use Constructor function to this class, which is a special method that can be added to any class in JavaScript, that will be automatically excecuted when this class (class TasksComponent) is instantiated, which will happen when this component is used in some template

// So this constructor will be executed automatically, and it will be Angular that executes it in the end, because it will be Angular that instantiates this component

// Private => Meant to be used only within this component

// * To tell the Angular about the dependency I need, I would simply add that dependency to the constructor

// ! Dependency Injection => I tell Angular which type of value I need and Angular creates it and provides it as an argument 

//* In other words => I specify my dependencies in the constructor function, and by clearly defining the type of paramater (taskService), Angular is able to look up the class of that type and create it for me

/* To make this tasksService available in the rest of the class, I need to store it in a property such as => private tasksService: TasksService

I can either specify it like this:

  constructor(tasksService: TasksService){
    this.tasksService = tasksService;
  }

*/

// * Or I can use shortcut offered by typescript

  constructor(private tasksService: TasksService){}
  
  get selectedUserTask() {

    return this.tasksService.getUserTasks(this.userId)

  } 




  onCompleteTask(id: string){
    
      //* Function code moved to tasks.service.ts


  }


  //* When the button is clicked (we start the process by conditionally showing a component that will allow as to enter the task details) add task - [Name is describing the action very well] 
  onStartAddTask (){

    this.isAddingTask = true;
  }


  // To make the dialog in new-task.html closable, I need to add new method onCancelAddTask which will set isAddingTask to false, which in turn will then remove new-task component from DOM as the condition will not be met.
  //! Remember Angular keeps checking for any change of state and if that occur Re-Renders everything if SIGNALS are not being used 

  //H -> Jump to new-task.component.html responsible for rendering new-task

  onCancelAddTask(){
    this.isAddingTask = false;
  }


  // tasks.component.html is listening for an event (add). After this event is triggered onAddTask(taskData: {}) is called. 
  //* Because I am passing data (add is emiting the data in the form of object that were captured in new-task.component.ts) I will also need to specify that as a paramater.

  // taskData we receive in this method are of the shape NewTaskData specified in task.model.ts so I cna use this data type
  
  //* Remember that task that will be added to tasks array needs to have the same shape
  onAddTask(taskData: NewTaskData){

  //* Function code moved to tasks.service.ts

    this.isAddingTask = false;


  }




}
