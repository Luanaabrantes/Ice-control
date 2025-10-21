import { Routes } from '@angular/router';
import { Login } from './component/login/login';
import { Register } from './component/register/register';   
import { Pedido } from './component/pedido/pedido';
import { NovoPedido } from './component/novo-pedido/novo-pedido';
import { Produtos } from './component/produtos/produtos';   


export const routes: Routes = [
    {
        path: '',component: Login
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
    }
 
];