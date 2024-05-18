import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  firstName: string ="";
  lastName: string ="";
  username: string ="";
  email: string ="";
  address: string ="";
  contactNo: Number =0;
  Password: string ="";

  constructor(private http: HttpClient )
  {
   
  }
  register()
  {
    let bodyData = {
      "firstName" : this.firstName,
      "lastName" : this.lastName,
      "username" : this.username,
      "email" : this.email,
      "address" : this.address,
      "contactNo" : this.contactNo,
      "Password" : this.Password,
    };
    this.http.post("http://localhost:8186/user/create",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Registered Successfully");
      
 
        this.firstName = '';
        this.lastName = '';
        this.username = '';
        this.email = '';
        this.address = '';
        this.contactNo = 0;
    });
  }




}
