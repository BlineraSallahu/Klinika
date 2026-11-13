
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionService } from '../../../services/prescription';

@Component({
  selector: 'app-prescriptions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prescriptions.html',
  styleUrl: './prescriptions.scss'
})
export class Prescriptions {

  constructor(private prescriptionService: PrescriptionService) {}

  get prescriptions() {
    return this.prescriptionService.getPrescriptions();
  }

}
