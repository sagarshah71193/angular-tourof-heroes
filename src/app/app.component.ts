import { Component } from '@angular/core';


/**
 * selector's value is used in html tag, like <app-root><app-root>, in parent html class to call that Component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
