import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-novo-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novo-pedido.html',
  styleUrl: './novo-pedido.css'
})
export class NovoPedido {

  @Input() onOpenMenu?: () => void;

  /** Mock inicial só para o *ngFor não quebrar */
  items = Array.from({ length: 3 }, () => ({}));
  parcelas = Array.from({ length: 3 }, () => ({}));

}
