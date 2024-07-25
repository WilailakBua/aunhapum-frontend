import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuModel } from '../../shared/model/menuModel';

@Component({
  selector: 'app-insert-menu',
  templateUrl: './insert-menu.component.html',
  styleUrl: './insert-menu.component.css'
})
export class InsertMenuComponent implements OnInit {

  formModal: FormGroup;
  menuList: any[] = [];

  constructor(
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formModal = this.formBuilder.group({
      insertName: ['', Validators.required],
      insertPrice: ['', Validators.required],
    });
  }

  insertName(value: any) {

  }

  insertPrice(value: any) {

  }

  insertMenu() {
    this.menuList.push(
      {
        "name": this.formModal.controls.insertName.value,
        "price": this.formModal.controls.insertPrice.value
      }
    )
    this.formModal.controls.insertName.reset();
    this.formModal.controls.insertPrice.reset();
  }

  clearMenu() {
    this.menuList = [];
  }
}
