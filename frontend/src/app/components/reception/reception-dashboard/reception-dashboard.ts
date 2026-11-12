import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reception-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reception-dashboard.html',
  styleUrl: './reception-dashboard.scss'
})
export class ReceptionDashboard {

  waitingPatients = [
    {
      name: 'Arben Krasniqi',
      doctor: 'Dr. Hoxha',
      status: 'Në Pritje'
    },
    {
      name: 'Blerta Berisha',
      doctor: 'Dr. Gashi',
      status: 'Te Mjeku'
    },
    {
      name: 'Nora Shala',
      doctor: 'Dr. Hoxha',
      status: 'Në Pritje'
    }
  ];

}