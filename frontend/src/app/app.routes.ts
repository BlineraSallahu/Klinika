
import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'patients',
        loadComponent: () =>
          import('./components/patients/patients-dashboard/patient-dashboard')
            .then(m => m.PatientDashboard)
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('./components/appointments/patient-appointments/patient-appointments')
            .then(m => m.PatientAppointments)
      },
      {
        path: 'users',
        loadComponent: () =>
          import('./components/users/user-management/user-management')
            .then(m => m.UserManagement)
      },
      {
        path: 'doctors',
        loadComponent: () =>
          import('./components/doctors/doctor-dashboard/doctor-dashboard')
            .then(m => m.DoctorDashboard)
      },
      {
        path: 'prescriptions',
        loadComponent: () =>
          import('./components/doctors/prescriptions/prescriptions')
            .then(m => m.Prescriptions)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
