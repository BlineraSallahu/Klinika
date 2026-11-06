import { Router } from 'express';
import { PatientController } from '../controllers/patient.controller';

const router = Router();
const patientController = new PatientController();

// Definojmë rrugët e aplikacionit
router.get('/', patientController.getPatients);
router.post('/', patientController.addPatient);
router.delete('/:id', patientController.deletePatient);

export default router;