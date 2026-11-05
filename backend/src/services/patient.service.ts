import { Patient } from '../models/patient.model';

export class PatientService {
    private patients: Patient[] = [];

    // Merr të gjithë pacientët
    getAllPatients(): Patient[] {
        return this.patients;
    }

    // Shto një pacient të ri
    createPatient(patientData: Omit<Patient, 'id'>): Patient {
        const newPatient: Patient = {
            id: Math.random().toString(36).substr(2, 9), // Gjeneron një ID unike
            ...patientData
        };
        this.patients.push(newPatient);
        return newPatient;
    }
}