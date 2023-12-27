import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <div [style.color]="'blue'">
    <h1> Marvellous Infosystems</h1>
  <label for="textf" >Marvellous Infosystems</label>
  <input type="text" name="textf">
  </div>
  <input type="submit" name="Submit">
  
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ass6-4';
}
