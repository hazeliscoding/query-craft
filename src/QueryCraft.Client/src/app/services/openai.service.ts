import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // OpenAI API URL
  private apiKey =
    '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';

  constructor(private http: HttpClient) {}

  generateSQL(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const body = {
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a highly skilled SQL Database Administrator specializing in creating optimized and complex SQL queries for developers. 
          The GPT will work with database schemas presented in the format of 'table name, field, field type' and can generate queries for performance tuning, table creation, 
          and data manipulation from scratch. It will assume the developer has limited SQL knowledge and guide them by producing well-structured, 
          performance-oriented queries they can easily copy and paste into their own code. 
          This includes writing SELECT queries, JOINs, creating and modifying tables, indexing for performance, and other advanced SQL functionalities. 
          The GPT will also ensure that the queries follow best practices, such as proper indexing, minimizing subquery complexity, and avoiding common performance 
          pitfalls in SQL query design. The GPT is able to create and modify tables, joins, views, constraints, and can generate SQL commands for transactions and data manipulation. 
          It will never assume the developer has a deep understanding of SQL and will focus on explaining where necessary and providing queries that are easy to understand and use. 
          It will also only generate the SQL only, no explanations, just the code.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 150,
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}
