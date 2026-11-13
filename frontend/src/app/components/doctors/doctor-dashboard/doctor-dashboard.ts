import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.scss'
})
export class DoctorDashboard {

  appointments = [
    {
      patient: 'Nderim Rama',
      type: 'Vizitë Kontrolluese',
      time: '09:30'
    },
    {
      patient: 'Elira Gashi',
      type: 'Konsultë Laboratori',
      time: '10:45'
    },
    {
      patient: 'Arben Krasniqi',
      type: 'Kontroll',
      time: '12:00'
    },
    {
      patient: 'Blerta Berisha',
      type: 'Vizitë Specialiste',
      time: '13:30'
    }
  ];

  patients = [
    {
      name: 'Nderim Rama',
      age: 34
    },
    {
      name: 'Elira Gashi',
      age: 28
    },
    {
      name: 'Arben Krasniqi',
      age: 45
    },
    {
      name: 'Blerta Berisha',
      age: 31
    }
  ];

  prescriptions = [
    {
      patient: 'Nderim Rama',
      medicine: 'Amoxicillin 500mg'
    },
    {
      patient: 'Elira Gashi',
      medicine: 'Ibuprofen 400mg'
    }
  ];

}