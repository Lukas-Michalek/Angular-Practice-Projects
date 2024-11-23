//  The service in Angular is just another class, that performs some operation and/or manages some data that might be needed by one or more Components

import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

// * adding 'private' in front of property name makes the property Private, so that it can actually only be used inside of this service.


// Register this TasksService as something injectable with Angular, so that Angular knows that it can be injected and that it should look for this thing when encountering a dependency (like the one stored in tasks.component.ts => constructor( private tasksService: TasksServicce))

// To register it I use @Injectable({configuration object}) that needs to be imported

// * providedIn => configuration object

// By adding @Injectable, Angular now is aware of this service and can create this instance when I need it, and most importantly it will only create and reuse one instance so that different components operate on the same object in memory and therefore on the same data

@Injectable({providedIn: 'root'})

export class TasksService {
 
    private tasks = [
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
      ];

  //H *****     USE localStorage for Data Storage    ***** //

  // Constructor is the function that is automatically excecuted when the app starts

  // * const tasks = localStorage.getItem('tasks') => reach out to localStorage, get specified data from that storage nad save them in tasks variable
  
  constructor() {
    const tasks = localStorage.getItem('tasks')
    
    // If there are some data stored already (not the case for when the code is run for the first time)
    //* If there are some tasks stored I want to override the tasks generated with the app by the tasks stored there
    // ! Note that I can`t store complex data structures (such as Objects) in localStorage and therefore I need to transform tasks array into string. For that I use JSON format = So the tasks are stored in JSON format as a storng
    //* To transform them back into array I use JSON.parse() method
    
    // If no tasks are found I keep these Dummy Tasks Data, however if there are some tasks in localStorage already I use those.
   
    if(tasks){

      this.tasks = JSON.parse(tasks);

    }
  }

    // Expects to get a userID of type string as an input, and which should then return all the tasks that belong to taht user with that ID
      getUserTasks(userId: string){

        return this.tasks.filter((task) => task.userId === userId);
      }

      
      addTask(taskData: NewTaskData, userId:string) {

        this.tasks.push({
      
            id: new Date().getTime().toString(),  // I need to create new id for each task
            userId: userId,                  // As the task is added to the current user user id is from this user
            title: taskData.title,
            summary: taskData.summary, 
            dueDate: taskData.date,
          })
          this.saveTasks();
        }

      removeTask(id: string){


        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.saveTasks();
      }

      
      // Whenever is this method called it replace that tasks that are already stored in the localStorage with acutal copy of tasks, that will either have one more or one less task that the tasks array currently in tasks array in JSON format on localStorage
      private saveTasks() {

        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }

}