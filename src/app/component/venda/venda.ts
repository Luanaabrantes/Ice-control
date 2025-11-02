import { Component, computed, signal, LOCALE_ID } from '@angular/core';
import { CommonModule, DatePipe, NgClass, registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr); // registra dados do locale uma única vez

type Status =
  | 'EM_ABERTO'
  | 'EM_DIGITACAO'
  | 'AGUARDANDO'
  | 'CONCLUIDO'
  | 'CANCELADO'
  | 'DEVOLUCAO';

interface Pedido {
  numero: number;
  data: string; // formato ISO (2025-08-25)
  cliente: string;
  total: number;
  status: Status;
}

@Component({
  selector: 'app-venda',
  imports: [CommonModule, DatePipe, NgClass],
  templateUrl: './venda.html',
  styleUrls: ['./venda.css'],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }   // <-- força pt-BR neste componente
  ]
})
export class Venda {
// controle do menu hambúrguer (mobile)
  menuOpen = signal(false);

  // campos de filtro (busca e período)
  filtroTexto = signal('');
  filtroPeriodo = signal<'todos' | '17-27'>('todos');

  // lista mockada de pedidos
  pedidos = signal<Pedido[]>([
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'EM_ABERTO' },
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'EM_DIGITACAO' },
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'AGUARDANDO' },
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'CONCLUIDO' },
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'CANCELADO' },
    { numero: 14695, data: '2025-08-25', cliente: 'Jose Ricardo Flor', total: 1589.99, status: 'DEVOLUCAO' },
  ]);

  // lista filtrada (busca simples)
  pedidosFiltrados = computed(() => {
    const q = this.filtroTexto().toLowerCase().trim();
    return this.pedidos().filter(p =>
      !q || p.cliente.toLowerCase().includes(q) || String(p.numero).includes(q)
    );
  });

 // ===== Handlers p/ evitar arrow e type assertion no template =====
  toggleMenu(): void {
    this.menuOpen.update(prev => !prev);
  }
  onSearch(ev: Event): void {
    const value = (ev.target as HTMLInputElement).value ?? '';
    this.filtroTexto.set(value);
  }
  setPeriodo(p: 'todos' | '17-27'): void {
    this.filtroPeriodo.set(p);
  }

  // classes e labels de status
  chipClass(s: Status) {
    return {
      badge: true,
      'badge-open':    s === 'EM_ABERTO',
      'badge-draft':   s === 'EM_DIGITACAO',
      'badge-waiting': s === 'AGUARDANDO',
      'badge-done':    s === 'CONCLUIDO',
      'badge-cancel':  s === 'CANCELADO',
      'badge-return':  s === 'DEVOLUCAO',
    };
  }
  statusLabel(s: Status) {
    switch (s) {
      case 'EM_ABERTO':    return 'Em aberto';
      case 'EM_DIGITACAO': return 'Em digitação';
      case 'AGUARDANDO':   return 'Aguardando';
      case 'CONCLUIDO':    return 'Concluído';
      case 'CANCELADO':    return 'Cancelado';
      case 'DEVOLUCAO':    return 'Devolução';
    }
  }
}