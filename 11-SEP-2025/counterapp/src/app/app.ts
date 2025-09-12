import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   title = 'counterapp';

   let count = 0;
const countDisplay = document.getElementById("count");

function updateDisplay() {
  countDisplay.textContent = count;
}

function increment() {
  count++;
  updateDisplay();
}

function decrement() {
  count--;
  updateDisplay();
}

function reset() {
  count = 0;
  updateDisplay();
}

    


   }

}
