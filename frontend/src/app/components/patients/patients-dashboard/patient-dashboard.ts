
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patients-dashboard.html',
  styleUrl: './patients-dashboard.scss'
})
export class PatientDashboard {

  patientName = 'Rina Miftari';

  nextAppointment: {
    date: string;
    time: string;
    department: string;
    doctor: string;
  } | null = {
    date: '20 Nëntor 2026',
    time: '10:30',
    department: 'Kardiologji',
    doctor: 'Dr. Hoxha'
  };

  prescriptions = [
    {
      medicine: 'Amoxicillin 500mg',
      date: '10 Nëntor 2026'
    },
    {
      medicine: 'Ibuprofen 400mg',
      date: '12 Nëntor 2026'
    }
  ];

  cancelAppointment() {
    const confirmCancel = confirm(
      'A jeni të sigurt që dëshironi ta anuloni terminin?'
    );

    if (confirmCancel) {
      this.nextAppointment = null;
    }
  }

  changeAppointment() {
    if (!this.nextAppointment) {
      return;
    }

    const newDate = prompt(
      'Shkruani datën e re:',
      this.nextAppointment.date
    );

    if (newDate === null || newDate.trim() === '') {
      return;
    }

    const newTime = prompt(
      'Shkruani orën e re:',
      this.nextAppointment.time
    );

    if (newTime === null || newTime.trim() === '') {
      return;
    }

    this.nextAppointment = {
      ...this.nextAppointment,
      date: newDate.trim(),
      time: newTime.trim()
    };

    alert('Termini u ndryshua me sukses!');
  }

  downloadPrescription(prescription: { medicine: string; date: string }) {
    const printWindow = window.open('', '_blank');

    if (!printWindow) {
      alert('Ju lutem lejoni hapjen e dritareve të reja në shfletues.');
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Receta Mjekësore</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #1e293b;
            }

            h1 {
              color: #2563eb;
            }

            .prescription {
              border: 1px solid #cbd5e1;
              padding: 20px;
              border-radius: 10px;
              margin-top: 20px;
            }
          </style>
        </head>

        <body>
          <h1>Receta Mjekësore</h1>

          <div class="prescription">
            <h2>${prescription.medicine}</h2>
            <p>Lëshuar më: ${prescription.date}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }

}
