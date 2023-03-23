import { NewsComponent } from './components/News/News.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoreNewsComponent } from './components/moreNews/moreNews.component';
import { NewsListComponent } from './components/NewsList/NewsList.component';
const routes: Routes = [
  {
    path: '', component: NewsListComponent,
},  
 { path: 'profile/:',
 component: MoreNewsComponent,
 data: {message: '/:'},
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
