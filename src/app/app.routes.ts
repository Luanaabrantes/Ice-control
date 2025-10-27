import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';   
import { Pedido } from './component/pedido/pedido';
import { NovoPedido } from './component/novo-pedido/novo-pedido';
import { Produtos } from './component/produtos/produtos';
import { Cliente } from './component/cliente/cliente';   
import { Venda } from './component/venda/venda';   
import { Categoria } from './component/categoria/categoria'; 
import { Sidebar } from './component/sidebar/sidebar';      
import { CommonModule } from '@angular/common';


export const routes: Routes = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    {
        path: 'login', component: Login,
    },
    {
        path: 'register', component: Register,
    },
    {
        path: 'pedido', component: Pedido
    },
    {
        path: 'novo-pedido', component: NovoPedido
    },
    {
        path: 'produtos', component: Produtos
    },
    {
        path: 'cliente', component: Cliente
    },
    {
        path: 'venda', component: Venda
    },
    { 
        path: 'categoria', component: Categoria
    },
    {
        path: 'sidebar', component: Sidebar
    },
    
];