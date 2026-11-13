
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-appointments.html',
  styleUrl: './patient-appointments.scss'
})
export class PatientAppointments {

  patientName = 'Rina Miftari';
  today = new Date().toISOString().split('T')[0];

  departments = [
    'Kardiologji',
    'Dermatologji',
    'Neurologji',
    'Pediatri',
    'Gjinekologji',
    'Stomatologji'
  ];

  doctors = [
    'Dr. Hoxha',
    'Dr. Krasniqi',
    'Dr. Berisha',
    'Dr. Gashi'
  ];

  selectedDepartment = '';
  selectedDoctor = '';
  selectedDate = '';
  selectedTime = '';

  appointments: {
    id: number;
    department: string;
    doctor: string;
    date: string;
    time: string;
    status: string;
  }[] = [];

  private nextId = 1;

  bookAppointment() {
    if (
      !this.selectedDepartment ||
      !this.selectedDoctor ||
      !this.selectedDate ||
      !this.selectedTime
    ) {
      alert('Ju lutem plotësoni të gjitha fushat.');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const appointmentDate = new Date(this.selectedDate + 'T00:00:00');

    if (appointmentDate < today) {
      alert('Ju nuk mund të caktoni termin në një datë të kaluar.');
      return;
    }

    this.appointments.push({
      id: this.nextId++,
      department: this.selectedDepartment,
      doctor: this.selectedDoctor,
      date: this.selectedDate,
      time: this.selectedTime,
      status: 'Në pritje'
    });

    alert('Termini u caktua me sukses!');

    this.resetForm();
  }

  cancelAppointment(id: number) {
    const confirmed = confirm(
      'A jeni të sigurt që dëshironi ta anuloni këtë termin?'
    );

    if (confirmed) {
      this.appointments = this.appointments.filter(
        appointment => appointment.id !== id
      );
    }
  }

  resetForm() {
    this.selectedDepartment = '';
    this.selectedDoctor = '';
    this.selectedDate = '';
    this.selectedTime = '';
  }

}
