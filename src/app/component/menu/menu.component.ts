import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuModel } from '../../shared/model/menuModel';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  dataMenu = [
    { id: 1, name: 'ปังปิ้งเนยนม', price: 20 },
    { id: 2, name: 'ปังปิ้งเนยน้ำตาล', price: 20 },
    { id: 3, name: 'ปังปิ้งเนยนมน้ำตาล	', price: 20 },
    { id: 4, name: 'ปังปิ้งช็อกโกแลต', price: 20 },
    { id: 5, name: 'ปังปิ้งราดซอสสตอเบอรี่', price: 20 },
    { id: 6, name: 'ปังปิ้งราดซอสส้ม', price: 20 },
    { id: 7, name: 'ปังปิ้งราดซอสบลูเบอร์รี่', price: 20 },
    { id: 8, name: 'ปังปิ้งสังขยา', price: 20 },
    { id: 9, name: 'ปังปิ้งนมโอวัลติน เฟลค', price: 30 },
    { id: 10, name: 'ปังปิ้งกล้วยช็อก', price: 30 },
    { id: 11, name: 'ปังปิ้งคาราเมล', price: 25 },
    { id: 12, name: 'ปังปิ้งคาราเมล+กล้วย', price: 35 },
    { id: 13, name: 'ปังปิ้งคอนเฟลคราดคาราเมล', price: 25 },
    { id: 14, name: 'ปังปิ้งโกโก้ ครั้นราดคาราเมล', price: 25 },
    { id: 15, name: 'ปังปิ้งคอปป สกายราดคาราเมล', price: 25 },
    { id: 16, name: 'ปังปิ้งมาร์ชเมลโล่ขาวใหญ่ราดคาราเมล', price: 35 },
    { id: 17, name: 'ปังปิ้งราดนมหรือช็อก คอนแฟลก', price: 20 },
    { id: 18, name: 'ปังปิ้งราดนมหรือช็อก ผงโอวัลติน ', price: 20 },
    { id: 19, name: 'ปังปิ้งราดนมหรือช็อก โกโก้ ครั้น', price: 25 },
    { id: 20, name: 'ปังปิ้งราดนมหรือช็อก ลูกเกดดำ', price: 25 },
    { id: 21, name: 'ปังปิ้งราดนมหรือช็อก อัลมอนด์สไลด์', price: 25 },
    { id: 22, name: 'ปังปิ้งราดนมหรือช็อก คอปป สกาย', price: 25 },
    { id: 23, name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+คอนเฟลค', price: 25 },
    { id: 24, name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+โกโก้ครั้น ', price: 30 },
    { id: 25, name: 'ปังปิ้งราดนมหรือช็อก+โกโก้ ครั้น+คอปปสกาย', price: 30 },
    { id: 26, name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+โกโก้ครั้น ', price: 30 },
    { id: 27, name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+คอปปสกาย', price: 30 },
    { id: 28, name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+กล้วยหอม ', price: 30 },
    {
      id: 29,
      name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+อัลมอนด์สไลด์',
      price: 30,
    },
    { id: 30, name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+ลูกเกด ', price: 30 },
    // { "id": 31	, "name": "ปังปิ้งราดนมหรือช็อก+โกโก้ครั้น+คอปปสกาย ", "price": 30	},
    {
      id: 32,
      name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+โกโก้ ครั้น',
      price: 30,
    },
    { id: 33, name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+คอปปสกาย ', price: 30 },
    { id: 34, name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+กล้วยหอม', price: 30 },
    { id: 35, name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+คอนเฟลค ', price: 30 },
    {
      id: 36,
      name: 'ปังปิ้งราดนมหรือช็อก+โอวัลตินเฟลค+อัลมอนด์สไลด์',
      price: 30,
    },
    { id: 37, name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+คอปปสกาย', price: 30 },
    { id: 38, name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+ลูกเกด', price: 30 },
    { id: 39, name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+อัลมอนด์สไลด์ ', price: 30 },
    { id: 40, name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+กล้วยหอม', price: 30 },
    {
      id: 41,
      name: 'ปังปิ้งราดนมหรือช็อก+ผงโอวัลติน+มาร์ชเมลโล่ขาวใหญ่',
      price: 35,
    },
    {
      id: 42,
      name: 'ปังปิ้งราดนมหรือช็อก+คอนเฟลค+มาร์ชเมลโล่ขาวใหญ่',
      price: 40,
    },
    {
      id: 43,
      name: 'ปังปิ้งราดนมหรือช็อก+โอวัลติน เฟลค+มาร์ชเมลโล่ขาวใหญ่',
      price: 40,
    },
    { id: 44, name: 'ปังปิ้งราดนมหรือช็อก+มาร์ชเมลโล่ขาวใหญ่ ', price: 35 },
    { id: 45, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่ราดนม', price: 25 },
    { id: 46, name: 'ปังปิ้งแยมส้มราดนม', price: 25 },
    { id: 47, name: 'ปังปิ้งคอนแฟลกราดซอสสตรอว์เบอร์รี่ ', price: 25 },
    { id: 48, name: 'ปังปิ้งโกโก้ ครั้นราดซอสสตรอว์เบอร์รี่', price: 25 },
    { id: 49, name: 'ปังปิ้งคอปป สกายราดซอสสตรอว์เบอร์รี่', price: 25 },
    {
      id: 50,
      name: 'ปังปิ้งมาร์ชเมลโล่ขาวใหญ่ราดซอสสตรอว์เบอร์รี่',
      price: 35,
    },
    { id: 51, name: 'ปังปิ้งคอนแฟลกราดซอสส้ม ', price: 25 },
    { id: 52, name: 'ปังปิ้งโกโก้ ครั้นราดซอสส้ม', price: 25 },
    { id: 53, name: 'ปังปิ้งคอปป สกายราดซอสส้ม', price: 25 },
    { id: 54, name: 'ปังปิ้งมาร์ชเมลโล่ขาวใหญ่ราดซอสส้ม', price: 35 },
    { id: 55, name: 'ปังปิ้งคอนแฟลกราดซอสบลูเบอร์รี่ ', price: 25 },
    { id: 56, name: 'ปังปิ้งโกโก้ ครั้นราดซอสบลูเบอร์รี่', price: 25 },
    { id: 57, name: 'ปังปิ้งคอปป สกายราดซอสบลูเบอร์รี่', price: 25 },
    { id: 58, name: 'ปังปิ้งมาร์ชเมลโล่ขาวใหญ่ราดซอสบลูเบอร์รี่', price: 35 },
    { id: 59, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่+คอนเฟลค ', price: 30 },
    { id: 60, name: 'ปังปิ้งแยมส้ม+คอนเฟลค', price: 30 },
    { id: 61, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่+ลูกเกด', price: 30 },
    { id: 62, name: 'ปังปิ้งแยมส้ม+ลูกเกด', price: 30 },
    { id: 63, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่+อัลมอนด์สไลด์', price: 30 },
    { id: 64, name: 'ปังปิ้งแยมส้ม+อัลมอนด์สไลด์', price: 30 },
    { id: 65, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่+โกโก้ ครั้น ', price: 30 },
    { id: 66, name: 'ปังปิ้งแยมส้ม+โกโก้ ครั้น', price: 30 },
    { id: 67, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่+คอปป สกาย ', price: 30 },
    { id: 68, name: 'ปังปิ้งแยมส้ม+คอปป สกาย', price: 30 },
    { id: 69, name: 'ปังปิ้งนูเทลล่า', price: 30 },
    { id: 70, name: 'ปังปิ้งนูเทลล่า+กล้วย', price: 35 },
    { id: 71, name: 'ปังปิ้งนูเทลล่า+คอนเฟลค', price: 35 },
    { id: 72, name: 'ปังปิ้งนูเทลล่า+โกโก้ ครั้น', price: 35 },
    { id: 73, name: 'ปังปิ้งนูเทลล่า+คอปป สกาย', price: 35 },
    { id: 74, name: 'ปังปิ้งนูเทลล่า+อัลมอนด์สไลด์', price: 35 },
    { id: 75, name: 'ปังปิ้งนูเทลล่า+มาร์ชเมลโล่ขาวใหญ่', price: 45 },
    { id: 76, name: 'ปังปิ้งแยมส้ม', price: 25 },
    { id: 77, name: 'ปังปิ้งแยมสตรอว์เบอร์รี่', price: 25 },
    { id: 78, name: 'ปังปิ้งเนยถั่ว', price: 30 },
  ];

  formModal: FormGroup;
  listData: MenuModel[] = [];
  orderList: MenuModel[] = [];
  orders: any[] = [];
  size: NzButtonSize = 'large';
  sumary: number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.listData = this.dataMenu;
    this.createForm();
  }

  onChange(value: string): void {
    this.listData = this.dataMenu.filter(
      (option) => option.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }

  createForm() {
    this.formModal = this.formBuilder.group({
      inputSearch: [''],
    });
  }

  selectOrder(data: any) {
    console.log('data ', data);

    this.orders.push(data);

    this.orders = [...this.orders];

    this.sum();

    console.log('orders ', this.orders);

  }

  deleteRow(id: string): void {
    this.orders = this.orders.filter(d => d.id !== id);
    this.del();
  }

  sum() {
    this.sumary = this.orders
    .map((item: any) => item.price)
    .reduce((a: number, b: number) => a + b);

  }

  del() {
    this.sumary = this.orders
    .map((item: any) => item.price)
    .reduce((a: number, b: number) => a - b);

  }

  delete() {
    this.orders = [];
  }

}
