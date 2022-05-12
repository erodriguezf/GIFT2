import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitfsPageComponent } from './gitfs-page/gitfs-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GitfsPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GitfsPageComponent
  ]
})
export class GitfsModule { }
