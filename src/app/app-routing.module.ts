import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ViewArticlesComponent } from './view-articles/view-articles.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'view-articles', component: ViewArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
