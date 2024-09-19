import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-generator',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
  ],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent {
  query: string = '';
  generatedSQL: string | null = null;

  constructor(private openaiService: OpenaiService) {}

  generateSQL(): void {
    if (this.query) {
      const prompt = `Generate an SQL query for: ${this.query}`;
      this.openaiService.generateSQL(prompt).subscribe((response) => {
        console.log(response);
        this.generatedSQL = response.choices[0].message.content;
      });
    }
  }
}
