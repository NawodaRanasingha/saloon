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

  rejectAppointment(userId: string,app:any): void {
    this.appointmentService.setreject(userId,app).subscribe({
      next:(data)=>{
        this.snackBar.open('appoinment rejected', 'Close', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' });
        this.getAppointments()
      }
    })
  }

  confirmAppointment(userId: string,app:any): void {
    console.log(userId)
    this.appointmentService.setapprove(userId,app).subscribe({
      next:(data)=>{
        this.snackBar.open('appoinment approved sucessfully', 'Close', { duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'center' });
        this.getAppointments()
      }
    })
      

    };
  }


