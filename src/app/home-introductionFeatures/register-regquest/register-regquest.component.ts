import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-register-regquest',
  standalone: false,
  templateUrl: './register-regquest.component.html',
  styleUrls: ['./register-regquest.component.css']
})
export class RegisterRegquestComponent {
  requestAdd: FormGroup;
  loading = false;
  submitted = false; 
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private requestService: RequestService) {
    this.requestAdd = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{8,12}$')]], 
      photo: ['', Validators.required],
      school: ['', Validators.required],
      degree: ['', Validators.required],
      program: ['', Validators.required],
      graduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$'), Validators.min(1900), Validators.max(2025)]],
      motivation: ['', [Validators.required, Validators.minLength(50)]], 
      terms: [false, Validators.requiredTrue] 
    });
  }
  get f() {
    return this.requestAdd.controls;
  }

  addRequest() {
    this.submitted = false; 
    this.errorMessage = null; 

    if (this.requestAdd.invalid) {
      console.error('Form is invalid');
      this.requestAdd.markAllAsTouched(); 
      return;
    }

    this.loading = true;
    const newCollect = this.requestAdd.value;
    const formData = new FormData();
    Object.keys(newCollect).forEach(key => {
      if (key === 'photo' && newCollect[key]) {
        formData.append(key, newCollect[key][0] || newCollect[key]); 
      } else {
        formData.append(key, newCollect[key]);
      }
    });

    this.requestService.createCollect(formData).subscribe({
      next: (res: any) => {
        console.log('Request submitted successfully!', res);
        this.loading = false;
        this.submitted = true; 
        this.requestAdd.reset(); 
      },
      error: (error: any) => {
        console.error('Error submitting request:', error);
        this.loading = false;
        this.errorMessage = error.message || 'Submission failed. Please try again.';
      }
    });
  }
  onFileChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.requestAdd.get('photo')?.setValue(event.target.files[0]);
    }
  }
}