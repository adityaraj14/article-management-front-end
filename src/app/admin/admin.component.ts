import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private articleService: ArticleService){}

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
        console.log(this.articles)
      }
    )
  }

  public onUpdateArticle(article: Article, status: string): void {
    if (status === "approve") {
      article.approved=true;
    }
    if (status === "reject") {
      article.approved=false;
    }
    this.articleService.updateArticles(article).subscribe(
      (response: Article) => {
        console.log(response);
      }
    );
  }

}
