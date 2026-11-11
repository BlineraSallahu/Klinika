
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  login() {
    if (
      this.email === 'admin@klinika.com' &&
      this.password === '123456'
    ) {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Email ose fjalëkalimi nuk është i saktë!';
    }
  }
}

