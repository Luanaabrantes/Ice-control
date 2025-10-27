import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {

  constructor(private router: Router) {}

  goTo(path: string) {
    // Navega programaticamente e fecha o menu mobile (desmarca o checkbox #menu-toggle)
    this.router.navigate([path]).then(() => {
      const toggle = document.getElementById('menu-toggle') as HTMLInputElement | null;
      if (toggle) toggle.checked = false;
    });
  }

  isActive(path: string): boolean {
    try {
      return this.router.url === path;
    } catch {
      return false;
    }
  }

}

