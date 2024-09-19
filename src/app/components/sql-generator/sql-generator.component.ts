import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { OpenaiService } from '../../services/openai.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sql-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent {
  query: string = 'Select all the films an actor starred in';
  schema: string = ``;
  generatedSQL: string | null = null;

  constructor(private openaiService: OpenaiService) {}

  generateSQL(): void {
    console.log(this.schema);
    
    if (this.query) {
      const prompt = `${this.schema}\n\n${this.query}`;
      this.openaiService.generateSQL(prompt).subscribe((response) => {
        console.log(response);
        this.generatedSQL = response.choices[0].message.content;
      });
    }
  }
}
