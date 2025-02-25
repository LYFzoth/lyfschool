import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsIntroductionComponent } from './questions-introduction.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';

const routes:Routes = [
  {
    path:'',
    component:QuestionsIntroductionComponent
  }
]

@NgModule({
  declarations: [QuestionsIntroductionComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionsModule { }
