import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface OrderItem extends MenuItem {
  quantity: number;
}


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {
  menuItems: MenuItem[] = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Fries", price: 2.99 },
    { id: 3, name: "Soda", price: 1.99 },
    { id: 4, name: "Pizza", price: 8.99 },
    { id: 5, name: "Salad", price: 4.99 },
  ];

  filteredMenuItems: MenuItem[] = [];
  order: OrderItem[] = [];
  searchTerm: string = '';

  constructor() {}

  ngOnInit() {
    this.filteredMenuItems = this.menuItems;
  }

  searchMenu() {
    this.filteredMenuItems = this.menuItems.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  addToOrder(item: MenuItem) {
    const existingItem = this.order.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.order.push({ ...item, quantity: 1 });
    }
  }

  removeFromOrder(itemId: number) {
    const index = this.order.findIndex(item => item.id === itemId);
    if (index !== -1) {
      if (this.order[index].quantity > 1) {
        this.order[index].quantity -= 1;
      } else {
        this.order.splice(index, 1);
      }
    }
  }

  calculateTotal(): string {
    return this.order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  saveOrder() {
    // Here you would typically send the order to a backend service
    console.log('Saving order:', this.order);
   
    this.order = []; // Clear the order after saving
  }


}




  

