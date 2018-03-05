import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * FormsModule is not imported by default.
 * FormsModule allows use of *ngIf, ngModel etc.
 */
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
/**
 * HeroesComponent is added here automatically because it was created using ng command.
 * if you add a compont manually, you have to add that component here manually as well
 */
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    /**Notice HeroesComponent is here as well */
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
