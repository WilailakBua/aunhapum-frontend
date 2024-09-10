import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { InsertMenuComponent } from './insert-menu/insert-menu.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MenuComponent, InsertMenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule,
    HttpClientModule

  ]
})
export class MenuModule { }
