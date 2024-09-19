import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SqlGeneratorComponent } from "./components/sql-generator/sql-generator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SqlGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'query-craft';
}
