import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./component/menu/menu.module').then(m => m.MenuModule)
    }
];
