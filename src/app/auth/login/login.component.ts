import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [MessageService],
})
export class LoginComponent { 
  email: string = '';
  password: string = ''; 
  loginError: string = '';
  isError = false;
  role: string = '';

  constructor(private router: Router, private userService: UsersService, private messageService: MessageService) {}

  onRoleChange() {
    if (this.role === 'student') {
      this.role = 'Student';  
    } else if (this.role === 'teacher') {
      this.role = 'teacher';  
    } else if (this.role === 'admin') {
      this.role = 'admin'; 
    }
  }

  login() {
    this.userService.login({email: this.email, password: this.password}).subscribe({
      next: res => {
        if(res.status == 200) {
          localStorage.setItem('user', JSON.stringify(res.body.user));
          this.router.navigateByUrl('');
        } else {
          this.messageService.add({
            severity: 'warn',
            summary: 'Login failed',
            detail: 'Invalid credentials',
          });
        }
      },
      error: (error) => {
        if(error.status === 404) {
          this.isError = true;
        }
      },
      complete: () => {},
    });
  }
}
