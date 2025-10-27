import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido.html',
  styleUrls: ['./pedido.css']
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

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]).then(() => {
      this.sidebarOpen = false;
    });
  }

  isActive(path: string): boolean {
    try {
      return this.router.url === path || this.router.url.startsWith(path + '/');
    } catch {
      return false;
    }
  }
}
