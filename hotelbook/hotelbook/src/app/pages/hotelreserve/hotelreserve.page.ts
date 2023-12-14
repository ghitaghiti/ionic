import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { FirebaseService } from '../../firebase.service';


@Component({
  selector: 'app-hotelreserve',
  templateUrl: './hotelreserve.page.html',
  styleUrls: ['./hotelreserve.page.scss'],
})
export class HotelreservePage {
  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    password: [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
    // Add more validation messages as needed
  };

  constructor(
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private formBuilder: FormBuilder
  ) {
    this.validations_form = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      // Add more form controls as needed
    });
  }

  tryRegister(value) {
    this.authService.registerUser(value)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Account created successfully.';

        // Add logic to save additional data to Firebase using FirebaseService
        this.firebaseService.createTask(value);
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }
}

