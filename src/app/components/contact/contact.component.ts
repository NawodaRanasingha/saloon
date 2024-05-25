import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  constructor(private http: HttpClient) {


   }

   onSubmit(form: any) {
    const formData = form.value;
    this.http.post('http://localhost:3000/api/comments', formData)
      .subscribe(response => {
        console.log('Comment submitted', response);
      }, error => {
        console.error('Error submitting comment', error);
      });
  }
}





