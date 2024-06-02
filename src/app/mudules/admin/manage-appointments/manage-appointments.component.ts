import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../admin/components/services/appointment.service';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})
export class ManageAppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }

  editAppointment(appointment: any): void {
    // Implement edit functionality
  }

  deleteAppointment(userId: string): void {
    this.appointmentService.deleteAppointment(userId).subscribe(() => {
      this.getAppointments();
    });
  }
}
