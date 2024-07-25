import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMenuComponent } from './insert-menu.component';

describe('InsertMenuComponent', () => {
  let component: InsertMenuComponent;
  let fixture: ComponentFixture<InsertMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
