import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(
       private router: Router
  ) { }

  onSubmit() {
  
  }
  

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
