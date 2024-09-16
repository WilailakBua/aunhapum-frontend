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
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  menuItems: MenuItem[] = [
    { id: 1, name: 'Burger', price: 8.99 },
    { id: 2, name: 'Pizza', price: 10.99 },
    { id: 3, name: 'Salad', price: 6.99 },
    { id: 4, name: 'Fries', price: 3.99 },
    { id: 5, name: 'Soda', price: 1.99 },
  ];

  searchTerm: string = '';
  currentOrder: OrderItem[] = [];
  savedOrders: OrderItem[][] = [];

  constructor() {}

  get filteredMenuItems(): MenuItem[] {
    return this.menuItems.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  get orderTotal(): number {
    return this.currentOrder.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  addToOrder(item: MenuItem): void {
    const existingItem = this.currentOrder.find(orderItem => orderItem.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.currentOrder.push({ ...item, quantity: 1 });
    }
  }

  removeFromOrder(item: OrderItem): void {
    const index = this.currentOrder.findIndex(orderItem => orderItem.id === item.id);
    if (index !== -1) {
      if (this.currentOrder[index].quantity > 1) {
        this.currentOrder[index].quantity--;
      } else {
        this.currentOrder.splice(index, 1);
      }
    }
  }

  saveOrder(): void {
    if (this.currentOrder.length > 0) {
      this.savedOrders.push([...this.currentOrder]);
      this.currentOrder = [];
    }
  }
}
