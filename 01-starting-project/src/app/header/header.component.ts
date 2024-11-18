import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    // standalone: true,
    // imports: [],
    // * To migrate standalone component to module-based I just need to turn standalone property to false and remove any imports

    standalone: false,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',

})

export class HeaderComponent {}