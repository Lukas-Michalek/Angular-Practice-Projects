import { Component, Input,} from '@angular/core';
import { TaskComponent } from "./task/task.component";

import { NewTaskComponent } from './new-task/new-task.component';


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

  // We also need an extra proeprty which controls whether this new-task component is visible or not
  
  // * By setting the property tio 'false' Angular knows that it will be of the type boolean so I do not have to (and should not!) add the value type.
  
  // ! Do not do => isAddingTask: boolean = false; as it is not recommended if the inferred type is the correct type

  // isAddingTask is set to false initially but will be changed in onStartAddTask() function

  isAddingTask = false;

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn all the features of Angular and how to apply them.',
      dueDate: '2025-12-21',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build First Prototype',
      summary: 'Build a first prototype of online shop website',
      dueDate: '2024-12-21',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare Issue Template',
      summary: 'Prepare the issue templapte that will help outline project issues.',
      dueDate: '2026-11-11',
    }
  ]



  get selectedUserTask() {
    console.log(this.userId)
    
    return this.tasks.filter((task) => task.userId === this.userId);
  }




  onCompleteTask(id: string){
    
    this.tasks = this.tasks.filter((task) => task.id !== id);

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





}
