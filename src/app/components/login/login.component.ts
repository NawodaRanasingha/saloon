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

 
  login_form: FormGroup;  //for assign login data


  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private Toast: NgToastService,
   
  ) {
    
      
//    login part

this.login_form = this.formbuilder.group({

  email:'',
  password: '',

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
    let user = this.login_form.getRawValue()
    user.email = this.emailFormControl.value;

    console.log(user);
    this.http.post("http://localhost:5000/api/register", user, {
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
       this.Toast.success({ detail: "Thank you!!!", summary: 'Your registration is sent please wait for admin approve', duration: 9000, position: 'botomCenter' })
   
  }




  //login part
  loginsubmit():void{
    let loginuser = this.login_form.getRawValue()
     loginuser.email = this.emailFormControl.value;

    console.log(loginuser);

  }


}