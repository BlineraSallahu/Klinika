
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PrescriptionService } from '../../../services/prescription';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctor-dashboard.html',
  styleUrl: './doctor-dashboard.scss'
})
export class DoctorDashboard {

  constructor(private prescriptionService: PrescriptionService) {}

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
    { name: 'Nderim Rama', age: 34 },
    { name: 'Elira Gashi', age: 28 },
    { name: 'Arben Krasniqi', age: 45 },
    { name: 'Blerta Berisha', age: 31 }
  ];

  get prescriptions() {
    return this.prescriptionService.getPrescriptions();
  }

  showPrescriptionForm = false;
  showPatientSearch = false;

  selectedPatient = '';
  medicine = '';
  dosage = '';
  instructions = '';

  searchText = '';

  get filteredPatients() {
    return this.patients.filter(patient =>
      patient.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openPrescriptionForm(patient = '') {
    this.selectedPatient = patient;
    this.medicine = '';
    this.dosage = '';
    this.instructions = '';
    this.showPrescriptionForm = true;
  }

  savePrescription() {
    if (
      !this.selectedPatient ||
      !this.medicine.trim() ||
      !this.dosage.trim() ||
      !this.instructions.trim()
    ) {
      alert('Ju lutem plotësoni të gjitha fushat.');
      return;
    }

    this.prescriptionService.addPrescription({
      patient: this.selectedPatient,
      medicine: this.medicine.trim(),
      dosage: this.dosage.trim(),
      instructions: this.instructions.trim()
    });

    this.showPrescriptionForm = false;
    alert('Receta u krijua me sukses!');
  }

  openPatientSearch() {
    this.searchText = '';
    this.showPatientSearch = true;
  }

  closeForms() {
    this.showPrescriptionForm = false;
    this.showPatientSearch = false;
  }
}
