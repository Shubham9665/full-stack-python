import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./comman/navbar/navbar";
import { Sidebar } from "./comman/sidebar/sidebar";
import { Main } from "./comman/main/main";
import { Footer } from "./comman/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Sidebar, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SPA');
}
