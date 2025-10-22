import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css'
})
export class Pedido {
  // controla abrir/fechar a sidebar
  public sidebarOpen = false;

  public toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  public closeSidebar(): void {
    this.sidebarOpen = false;
  }
}
