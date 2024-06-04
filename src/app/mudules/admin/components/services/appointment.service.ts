import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5000/api/find-all/appointments';
  private apiUrl2 = 'http://localhost:5000/api/approve/appointments';

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  setapprove(id:String): Observable<any[]> {
    console.log(id)
    return this.http.put<any>(`${this.apiUrl2}/${id}`,{});
    
  }

  deleteAppointment(userId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
}
