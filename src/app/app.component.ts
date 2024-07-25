import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './component/menu.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, MenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aunhapum';

  // active(value: string) {
  //   // let result = false;
  //   if (value === 'menu') {
  //     return this.active;
  //     // result = true;
  //   } else if (value === 'insert-menu') {
  //     // result = true;
  //     return this.active;

  //   }
  // }
}
