import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InsertMenuComponent } from './insert-menu/insert-menu.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'insert-menu',
    component: InsertMenuComponent
  },
  {
    path: 'menu-list',
    component: MenuListComponent
  },
  {
    path: 'menu-page',
    component: MenuPageComponent
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
