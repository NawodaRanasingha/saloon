import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { NgToastService } from 'ng-angular-popup';


import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  pending: any;

  form: FormGroup

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
   
  ) {
    this.form = this.formbuilder.group({
      
      contact: ['', [Validators.required, Validators.pattern("^((\\+94-?)|0)?[0-9]{9}$")]],
      email: "",
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[$@$!%?&])[A-Za-z\d$@$!%?&].{8,}')
        ]
      ],
      
      
     
      userRole: "company",
     
      address: ['',Validators.required]
    })
  }

  ngOnInit(): void {



  }

 
  ValidateEmail = (email: any) => {

    var ValidRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if (email.match(ValidRegex)) {
      return true;
    } else {
      return false;
    }
  }

  checkpass = (pass: any, con_pass: any) => {
    if (pass == con_pass) {
      return true;
    } else {
      return false;
    }
  }

  submit(): void {
    let user = this.form.getRawValue()
    user.email = this.emailFormControl.value;

    console.log(user);


    if (user.contact == "" || this.emailFormControl.value == "" || user.contact == ''  || user.address == '' || user.password == ""  ) {
      this.snackBar.open("please  enter all the fields", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    } else if (!this.ValidateEmail(this.emailFormControl.value)) {
      this.snackBar.open("please  enter valid email", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })


    }else if(!this.form.valid) {
      this.snackBar.open("please enter valid details", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
  
    } else if (!this.checkpass(user.password, user.con_password)) {
      this.snackBar.open("Your password does not match", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    } else {
      this.http.post("http://localhost:5000/api/temp-register", user, {
        withCredentials: true
      })
        .subscribe(() => {
          this.Toast.success({ detail: "Thank you!!!", summary: 'Your registration is sent please wait for admin approve', duration: 9000, position: 'botomCenter' })
          this.router.navigate(['/']);

          // swal('Hello world!')

        },
          (err) => {
            this.snackBar.open(err.error.message, 'Close', {
              duration: 3000,
              verticalPosition: 'bottom',
              horizontalPosition: 'center'
            })
          })
    }
  }

}