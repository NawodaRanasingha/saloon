



  import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class BookingComponent {
  bookingDetails = {
    name: '',
    email: '',
    date: ''
  };

  submitBooking() {
    // Here you can handle the submission logic, like sending the data to a backend server
    console.log('Booking submitted:', this.bookingDetails);
  }
}


}
