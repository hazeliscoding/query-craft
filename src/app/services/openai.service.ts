import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/completions'; // OpenAI API URL
  private apiKey = process.env['OPENAI_API_KEY']; // OpenAI API Key

  constructor(private http: HttpClient) {}

  generateSQL(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-4o',
      prompt: prompt,
      max_tokens: 150,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
