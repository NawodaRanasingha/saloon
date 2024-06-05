import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrl: './view-appointments.component.css'
})
export class ViewAppointmentsComponent implements OnInit{
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService,) { }
  ngOnInit(): void {
   this.getAllAppointments();
  }


  getAllAppointments(): void {
    this.appointmentService.showAllAppointments().subscribe(
      (data) => {
      this.appointments = data;
      console.log(this.appointments)
    });
  }
}
