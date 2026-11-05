import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patient.routes';

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Lejon frontend-in të komunikojë me backend-in
app.use(express.json()); // Mundëson leximin e të dhënave JSON nga kërkesat

// Rrugët Kryesore
app.use('/api/patients', patientRoutes);

// Nisja e serverit
app.listen(PORT, () => {
    console.log(`Serveri i klinikës po kuron në http://localhost:${PORT}`);
});