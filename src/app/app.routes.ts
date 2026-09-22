import { Routes } from '@angular/router';
import { Pessoa } from './pessoa/pessoa';

export const routes: Routes = [
    {path: '', redirectTo: 'pessoa', pathMatch: 'full'},


    {path: 'pessoa', component: Pessoa}
];
