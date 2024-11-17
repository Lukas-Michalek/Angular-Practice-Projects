

//H **** Bootstrping Apps with Angular Modules *****

// import { bootstrapApplication } from '@angular/platform-browser';

// import { AppComponent } from './app/app.component';

//* The order of executing of this application is that main.ts will always gets executed first, and in this file (main.ts) I am telling the angular with which component do I want to start my Angular app, what my root component should be  (AppComponent in this case) 

//  This approach however works only if the component is STANDALONE

// bootstrapApplication(AppComponent).catch((err) => console.error(err));

// ************     If I am working with root Angular Module instead of Standalone Components, this is the approach I need to use

// import platformBrowserDynamic function from @angular/platform-browser-dynamic", and then execute it and on the result of calling this function call bootstrapModule, where I pass the reference of the module I want to start with (AppModule in this case)

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)