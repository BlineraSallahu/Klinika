
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Patient {
  id?: string | number;
  emri: string;
  mbiemri: string;
  email: string;
  telefoni: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = '/api/patients';

  constructor(private http: HttpClient) {}

  // Merr te gjithe pacientet
  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(this.apiUrl);
  }

  // Shto nje pacient te ri
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(this.apiUrl, patient);
  }

  // Fshi nje pacient
  deletePatient(id: string | number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
