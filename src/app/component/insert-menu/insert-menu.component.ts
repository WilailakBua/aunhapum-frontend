import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemeService } from '../../shared/service/theme.service';
export interface InsertElement {
  name: string;
  description: string;
  price: number;
  position: number;
}
@Component({
  selector: 'app-insert-menu',
  templateUrl: './insert-menu.component.html',
  styleUrl: './insert-menu.component.css',
})
export class InsertMenuComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'description', 'price'];

  addNew: InsertElement[] = [];

  ngAfterViewInit() {
  }

  formModal: FormGroup;
  fi: FormGroup;
  menuList: any[] = [];
  dataInsert: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.themeService.setTheme();
  }

  createForm() {
    this.fi = this.formBuilder.group({
      // insertName: ['', Validators.required],
      // insertPrice: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
    });
  }

  name(value: any) {}

  price(value: any) {}

  insertMenu() {
    this.menuList.push({
      name: this.formModal.controls.insertName.value,
      price: this.formModal.controls.insertPrice.value,
    });
    this.formModal.controls.insertName.reset();
    this.formModal.controls.insertPrice.reset();
  }

  clearMenu() {
    this.menuList = [];
  }

  deleteRow(id: string): void {
    this.dataInsert = this.dataInsert.filter((d) => d.id !== id);
  }

  addMenu() {
    let i = 1;
    const body = {
      name: this.fi.controls.name.value,
      description: this.fi.controls.description.value,
      price: this.fi.controls.price.value,
      position: i,
    };

    this.addNew.push(body);
    i++


  }
}
