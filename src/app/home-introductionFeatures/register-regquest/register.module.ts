import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRegquestComponent } from './register-regquest.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {
    path:'',
    component:RegisterRegquestComponent
  }
]

@NgModule({
  declarations: [RegisterRegquestComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RegisterModule { }
