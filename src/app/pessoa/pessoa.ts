import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormaPagamento, FormaPagamentoPipe } from '../pipes/forma-pagamento-pipe';
import { DiasParaPipe } from '../pipes/dias-para-pipe';
import { IniciaisPipe } from '../pipes/iniciais-pipe';
import { TelefonePipe } from '../pipes/telefone-pipe';

interface Participante {
  id: number;
  descricao: string;
  telefone: string;
  formaPagamento: FormaPagamento;
}

@Component({
  selector: 'app-pessoa',
  imports: [
    DatePipe,
    TelefonePipe,
    FormaPagamentoPipe,
    IniciaisPipe,
    DiasParaPipe,
  ],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoa {
  evento = {
    titulo: 'Semana de Tecnologia',
    data: '2026-11-20',
  };

  participantes: Participante[] = [
    { id: 1, descricao: 'Maria da Silva Santos', telefone: '71988887777', formaPagamento: 'pix' },
    { id: 2, descricao: 'João Guedes de Brito', telefone: '7133334444', formaPagamento: 'cartao' },
    { id: 3, descricao: 'Ana Souza', telefone: '71977776666', formaPagamento: 'boleto' },
  ];
}
