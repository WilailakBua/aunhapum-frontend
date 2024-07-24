import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'menu',
        loadChildren: () => import('./component/menu.module').then(m => m.MenuModule)
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    }
];
