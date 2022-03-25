import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ArticleService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){} 

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiServerUrl}/api/articles`);
  }

  public addArticles(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.apiServerUrl}/api/add`, article);
  }

  public updateArticles(article: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiServerUrl}/api/update`, article);
  }

  public deleteArticleById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/delete/${id}`);
  } 
}