import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculatorapp');

  display = ""
  appendValue(p: any) {
    this.display += p
  }

  calculate() {
    this.display = eval(this.display)
  }

}
