import { Request, Response } from 'express';
import { PatientService } from '../services/patient.service';

const patientService = new PatientService();

export class PatientController {
    // GET /api/patients
    async getPatients(req: Request, res: Response): Promise<void> {
        try {
            const patients = patientService.getAllPatients();
            res.status(200).json(patients);
        } catch (error) {
            res.status(500).json({ message: 'Gabim gjatë marrjes së pacientëve' });
        }
    }

    // POST /api/patients
    async addPatient(req: Request, res: Response): Promise<void> {
        try {
            const { emri, mbiemri, telefoni, dataRezervimit } = req.body;
            
            if (!emri || !mbiemri || !dataRezervimit) {
                res.status(400).json({ message: 'Ju lutem plotësoni fushat kryesore' });
                return;
            }

            const newPatient = patientService.createPatient({ emri, mbiemri, telefoni, dataRezervimit });
            res.status(201).json(newPatient);
        } catch (error) {
            res.status(500).json({ message: 'Gabim gjatë rezervimit' });
        }
    }
}
