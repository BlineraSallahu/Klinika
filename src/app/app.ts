import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputText } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { Button } from 'primeng/button';
import { Table } from 'primeng/table'; // <--- U shtua komponenti i ri për tabelën


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    InputText, 
    DatePicker, 
    Select, 
    Button,
    Table // <--- U shtua këtu në imports
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Klinika');


  // Lista e pacientëve të cilën tabela do ta lexojë automatikisht
  pacientet = [
    { emri: 'Arben Krasniqi', mjeku: 'Dr. Ilir Berisha', data: '26/10/2026', status: 'Në Pritje', klasaStatusi: 'bg-amber-100 text-amber-700' },
    { emri: 'Blerta Gashi', mjeku: 'Dr. Hana Shala', data: '26/10/2026', status: 'Kryer', klasaStatusi: 'bg-green-100 text-green-700' },
    { emri: 'Valon Morina', mjeku: 'Dr. Ilir Berisha', data: '27/10/2026', status: 'Anuluar', klasaStatusi: 'bg-red-100 text-red-700' }
  ];
}
