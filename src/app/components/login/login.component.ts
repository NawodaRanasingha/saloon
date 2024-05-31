import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);



  login_form: FormGroup;  //for assign login data


  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,

   
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




  loginsubmit(): void {
    if (this.login_form.invalid) {
      this.snackBar.open("Please fill or enter valid details", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
      return;
    }
  
    let user = this.login_form.getRawValue();
    console.log('Submitting login data:', user); // Log the data being sent
  
    this.http.post("http://localhost:5000/api/user/login", user, {
      withCredentials: true
    }).subscribe(
      (res: any) => {
        console.log('Login response:', res); // Log the response
        if (res.userRole === "admin") {
          this.router.navigate(['/admin']);
        } else if (res.userRole === "user") {
          this.router.navigate(['/']);
        }
      },
      (err) => {
        console.error('Login error:', err); // Log the error
        this.snackBar.open(err.error.message, 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        })
      }
    );
  }
  

}