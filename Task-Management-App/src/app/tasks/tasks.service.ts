
import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

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



  
  constructor() {
    const tasks = localStorage.getItem('tasks')
    
   
    if(tasks){

      this.tasks = JSON.parse(tasks);

    }
  }

      getUserTasks(userId: string){

        return this.tasks.filter((task) => task.userId === userId);
      }

      
      addTask(taskData: NewTaskData, userId:string) {

        this.tasks.push({
      
            id: new Date().getTime().toString(),  
            userId: userId,                  
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

      
      private saveTasks() {

        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }

}