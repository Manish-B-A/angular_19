import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'signals',
    title: 'SIGNALS',        
    loadComponent: () => import('./components/signals/signals.component').then(m => m.SignalsComponent),
},{
    path: 'mfe',
    title: 'SIGNALS',        
    loadComponent: () => import('./components/mfe-parent/mfe-parent.component').then(m => m.MfeParentComponent),
},{
    path: '**',
    title: 'Error',           
    loadComponent: () => import('./components/signals/signals.component').then(m => m.SignalsComponent),
}];
