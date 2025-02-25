import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'register-request',
        loadChildren: () => import('./register-regquest/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'questions',
        loadChildren: () => import('./questions-introduction/questions.module').then(m => m.QuestionsModule)
      },
    ]
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
