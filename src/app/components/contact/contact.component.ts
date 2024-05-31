
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);


  comment_form: FormGroup;  //for assign login data


  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,

   
  ) 


  {
    
      
    
    
    this.comment_form = this.formbuilder.group({
    
      email:'',
      comment: '',
    
    })
      }

      ngOnInit(): void {



      }

      loginsubmit(): void {
        if (this.comment_form.invalid) {
          this.snackBar.open("Please fill or enter valid details", 'Close', {
            duration: 3000,
            verticalPosition: 'bottom',
            horizontalPosition: 'center'
          })
          return;
        }
      
        let components = this.comment_form.getRawValue();
        console.log('Submitting login data:', components); // Log the data being sent
      
        this.http.post("http://localhost:5000/api/user/comment", components, {
          withCredentials: true
        })
        .subscribe(
          (res: any) => {
             console.log('Login response:', res); // Log the response
         
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
  
 
  





  






