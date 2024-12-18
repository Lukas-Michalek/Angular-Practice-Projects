import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

// @NgModule decorator (just like the most decorators) takes a configuration object where can I now configure the module -> Module are 'the things' that I use to group the Components together. So one essential configuration that must be done is to add a 'declarations array' to its configuration.
// * Components, directives etc. that need to work together are declared and registered in declarations array

//H **** 67. Bootstrping Apps with Angular Modules *****
//! Note that, in order to use components in moduels, they must not be STANDALONE!!! This means that in app.component.ts decorator I must make make sure that ==> standalone: false

// * In order to tell Angular with which component to start the App I need to add to the root angular module the special bootstrap configuration item, taking the array of the root components I want ot start my application with (typically just one)

//H ***** 68. Declaring & Using Components *****

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    
  ],
  bootstrap: [AppComponent],

  // If I want to keep my components standalone (for example if I am slowly migrating my project), instead of putting them in declarations array I can put them into imports array,
  // => declarations array is for NON-STANDALONE Components
  // => imports array is for STANDALONE Components

  //! The imports array is not just used for enabling standalone components but also FOR INCLUDING OTHER MODULES! Such as BrowserModule made by Angular teams containg some crutial directives and other features necessary to run Angular Modules in Browser

  //H **** 70. Migrating all standalone components to module-based
  imports: [BrowserModule, FormsModule, SharedModule, TasksModule],

 //! Note that all the imported modules in imports array are only made available to the imported modules in this module. => Only those that are in declaration array.
//* This means that BrowserModule, FormsModule, SharedModule are not avaialable to the modules contained in TasksModule (TasksComponent, TaskComponent, NewTaskComponent) and therefore I will need to import them to TasksModule as well!!!


})
export class AppModule {}
