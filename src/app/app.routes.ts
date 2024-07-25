import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./component/menu.module').then(m => m.MenuModule)
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
