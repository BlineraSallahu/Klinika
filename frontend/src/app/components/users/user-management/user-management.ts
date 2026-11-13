
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-management.html',
  styleUrl: './user-management.scss'
})
export class UserManagement {

  searchText = '';
  showForm = false;
  editingId: number | null = null;

  newUser: User = this.emptyUser();

  users: User[] = [
    {
      id: 1,
      name: 'Admin Klinika',
      email: 'admin@klinika.com',
      role: 'Administrator',
      status: 'Aktiv'
    },
    {
      id: 2,
      name: 'Dr. Hoxha',
      email: 'hoxha@klinika.com',
      role: 'Mjek',
      status: 'Aktiv'
    },
    {
      id: 3,
      name: 'Arta Berisha',
      email: 'arta@klinika.com',
      role: 'Recepsionist',
      status: 'Aktiv'
    }
  ];

  emptyUser(): User {
    return {
      id: 0,
      name: '',
      email: '',
      role: '',
      status: 'Aktiv'
    };
  }

  get filteredUsers(): User[] {
    return this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  openAddForm() {
    this.newUser = this.emptyUser();
    this.editingId = null;
    this.showForm = true;
  }

  editUser(user: User) {
    this.newUser = { ...user };
    this.editingId = user.id;
    this.showForm = true;
  }

  saveUser() {
    if (
      !this.newUser.name.trim() ||
      !this.newUser.email.trim() ||
      !this.newUser.role
    ) {
      alert('Ju lutem plotësoni të gjitha fushat.');
      return;
    }

    const emailExists = this.users.some(user =>
      user.email.toLowerCase() === this.newUser.email.toLowerCase() &&
      user.id !== this.editingId
    );

    if (emailExists) {
      alert('Ky email ekziston tashmë.');
      return;
    }

    if (this.editingId !== null) {
      this.users = this.users.map(user =>
        user.id === this.editingId ? { ...this.newUser } : user
      );
    } else {
      const newId = Math.max(0, ...this.users.map(user => user.id)) + 1;

      this.users.push({
        ...this.newUser,
        id: newId
      });
    }

    this.closeForm();
  }

  deleteUser(id: number) {
    const confirmed = confirm(
      'A jeni të sigurt që dëshironi ta fshini këtë përdorues?'
    );

    if (confirmed) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }

  closeForm() {
    this.showForm = false;
    this.editingId = null;
    this.newUser = this.emptyUser();
  }
}
