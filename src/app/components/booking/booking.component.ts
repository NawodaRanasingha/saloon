import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Service {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  selectedValue: String | undefined;
  Appinment_form!: FormGroup;  // Using non-null assertion operator
  
  services: Service[] = [
    {value: 'waxing', viewValue: 'Waxing'},
    {value: 'nail_services', viewValue: 'Nail Services'},
    {value: 'hair_services', viewValue: 'Hair Services'},
    {value: 'facials', viewValue: 'Facials'},
    {value: 'makeup', viewValue: 'Makeup'},
  ];




  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.Appinment_form = this.fb.group({
      name: ['', Validators.required],
       service: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  submitBooking(): void {
    let appointmentData = this.Appinment_form.getRawValue();
    appointmentData.service = this.selectedValue;
    console.log('Submitting booking data:', appointmentData);

    if (this.Appinment_form.invalid) {
      this.snackBar.open("Please fill or enter valid details", 'Close', {
        duration: 3000,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
      return;
    }

   

    this.http.post("http://localhost:5000/api/user/appointment", appointmentData, {
      withCredentials: true
    }).subscribe(
      (res: any) => {
        console.log('Booking response:', res);
        this.snackBar.open("Appointment booked successfully", 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        setTimeout(() => {
          window.location.href ='/appointment';
        }, 1000);
      },
      (err) => {
        console.error('Booking error:', err);
        this.snackBar.open(err.error.message, 'Close', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
      }
    );
  }
}
