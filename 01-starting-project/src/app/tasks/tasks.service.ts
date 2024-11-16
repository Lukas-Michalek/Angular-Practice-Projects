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
      }

      removeTask(id: string){

        console.log(`Task id received in removeTask => ` + id)

        this.tasks = this.tasks.filter((task) => task.id !== id);
      }

}