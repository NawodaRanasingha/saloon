import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../admin/components/services/appointment.service';
import { NgToastService } from 'ng-angular-popup';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage-appointments',
  templateUrl: './manage-appointments.component.html',
  styleUrls: ['./manage-appointments.component.css']
})
export class ManageAppointmentsComponent implements OnInit {
  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService,
    private Toast: NgToastService,
    private snackBar: MatSnackBar,
  ) {}

  

  ngOnInit(): void {
    this.getAppointments();
 
  }

  getAppointments(): void {
    this.appointmentService.getAppointments().subscribe(
      (data) => {
      this.appointments = data;
      console.log(this.appointments)
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

  confirmAppointment(userId: string): void {
    console.log(userId)
    this.appointmentService.setapprove(userId).subscribe({
      next:(data)=>{
        this.snackBar.open('appoinment approved sucessfully', 'Close', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' });
        this.getAppointments()
      }
    })
      

    };
  }


