import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';
import { Cadastro } from './cadastro/cadastro';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';

export const routes: Routes = [
    {path: '', redirectTo: 'cadastro', pathMatch: 'full'}, //Caso o URL esteja vazio, redirecione para Cadastro
    {path: 'pessoa', component: Pessoa},
    {path: 'cadastro', component: Cadastro},
    {path: 'eventos/novo', component: CadastroEvento},
    {path: '**', redirectTo: 'cadastro'}, // Caso o URL tenha um endereço inválido, redirecione para Cadastro também
];
