
import { Injectable } from '@angular/core';

export interface Prescription {
  patient: string;
  medicine: string;
  dosage: string;
  instructions: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  prescriptions: Prescription[] = [
    {
      patient: 'Nderim Rama',
      medicine: 'Amoxicillin',
      dosage: '500mg',
      instructions: 'Sipas udhëzimit të mjekut'
    },
    {
      patient: 'Elira Gashi',
      medicine: 'Ibuprofen',
      dosage: '400mg',
      instructions: 'Sipas udhëzimit të mjekut'
    }
  ];

  addPrescription(prescription: Prescription) {
    this.prescriptions.push(prescription);
  }

  getPrescriptions() {
    return this.prescriptions;
  }
}
