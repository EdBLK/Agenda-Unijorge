import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {path: '', redirectTo: 'cadastro', pathMatch: 'full'}, //Caso o URL esteja vazio, redirecione para Cadastro
    {path: '**', redirectTo: 'cadastro'}, // Caso o URL tenha um endereço inválido, redirecione para Cadastro também
    
    {path: 'pessoa', component: Pessoa},
    {path: 'cadastro', component: Cadastro}
];
