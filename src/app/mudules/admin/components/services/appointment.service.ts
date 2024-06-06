import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5000/api/appointments';
  private apiUrl2 = 'http://localhost:5000/api/approve/appointments';
  private apiUrl3 = 'http://localhost:5000/api/find-all/appointments';
  private apiUrl4 = 'http://localhost:5000/api/reject/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  showAllAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl3);
  }
  setapprove(id:String,data:any): Observable<any[]> {
    console.log(id)
    return this.http.post<any>(`${this.apiUrl2}/${id}`,data);
    
  }
  setreject(id:String,data:any): Observable<any[]> {
    console.log(id)
    return this.http.post<any>(`${this.apiUrl4}/${id}`,data);
    
  }


  deleteAppointment(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
