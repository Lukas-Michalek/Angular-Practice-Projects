import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";


@NgModule({
    
    // declarations array contains all the components that makes my tasks module / feature => All the tasks related componenets that need to work together
    declarations: [
            
            TasksComponent,
            TaskComponent,
            NewTaskComponent,],

    
    // As app.module needs to work with TasksComponent (in app.component.html template, tasks.componenet is a part of app.component) I need to export it. However, I need to only export TasksComponenet as it is the only one from these that app.component require.
    // * I only add the Components, that are being used by other Components defined in the importing module (the app module in this case)
    exports: [TasksComponent];

    //! Every module must work on its own! => If the module needs something, it must declare or import it itself! It can`t get it from any parent module that might be using this module
    imports: [CommonModule, FormsModule, SharedModule]

    //* To import Date Pipe I had to import Browser Module in AppMpdule. However, Browser module is a special module that can be imported only in Root Module. For every other I can use CommonModule
    
})

export class TasksModule{}