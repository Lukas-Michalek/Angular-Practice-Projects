import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({

    // Any component that might be shared, needs to be added to declrations array
    declarations: [CardComponent],
    
    // In exports array we define all the modules that are not just needed internally for the modules declared in declarations array, but that should also be made available to any other module that potentially imports the shared module.
    // * This means that in order for CardComponent to be available for user.component and task.component that are now in app.module, I need to add CardComponent to exports array
    exports: [CardComponent],

})

export class SharedModule {}