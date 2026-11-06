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

    // Fshi një pacient sipas ID-së; kthen false nëse pacienti nuk ekziston
    deletePatient(id: string): boolean {
        const index = this.patients.findIndex((patient) => patient.id === id);
        if (index === -1) {
            return false;
        }
        this.patients.splice(index, 1);
        return true;
    }
}