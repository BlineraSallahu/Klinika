
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
          import('./components/dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
