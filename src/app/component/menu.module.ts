import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { InsertMenuComponent } from './insert-menu/insert-menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuPageComponent } from './menu-page/menu-page.component';



@NgModule({
  declarations: [MenuComponent, InsertMenuComponent, MenuListComponent, MenuPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule,
    

  ],
})
export class MenuModule { }
