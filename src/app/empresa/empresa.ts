import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface EmpresaCadastro {
  id: number;
  nome: string;
  cnpj: string;
  segmento: string;
  fundacao: string;
  email: string;
  telefone: string;
  endereco: string;
  cidade: string;
  estado: string;
  responsavel: string;
  observacoes: string;
}

@Component({
  selector: 'app-empresa',
  imports: [FormsModule, DatePipe],
  templateUrl: './empresa.html',
  styleUrl: './empresa.css',
})
export class Empresa {
  empresas: EmpresaCadastro[] = [];
  mensagem = '';

  empresa = {
    nome: '',
    cnpj: '',
    segmento: '',
    fundacao: '',
    email: '',
    telefone: '',
    endereco: '',
    cidade: '',
    estado: '',
    responsavel: '',
    observacoes: ''
  };

  limparFormulario() {
    this.empresa = {
      nome: '',
      cnpj: '',
      segmento: '',
      fundacao: '',
      email: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      responsavel: '',
      observacoes: ''
    };

    this.mensagem = 'Formulário limpo.';
  }

  salvar() {
    const novaEmpresa: EmpresaCadastro = {
      id: Date.now(),
      nome: this.empresa.nome.trim(),
      cnpj: this.empresa.cnpj.trim(),
      segmento: this.empresa.segmento.trim(),
      fundacao: this.empresa.fundacao,
      email: this.empresa.email.trim(),
      telefone: this.empresa.telefone.trim(),
      endereco: this.empresa.endereco.trim(),
      cidade: this.empresa.cidade.trim(),
      estado: this.empresa.estado.trim(),
      responsavel: this.empresa.responsavel.trim(),
      observacoes: this.empresa.observacoes.trim()
    };

    if (!novaEmpresa.nome || !novaEmpresa.cnpj || !novaEmpresa.email) {
      this.mensagem = 'Preencha pelo menos nome, CNPJ e e-mail.';
      return;
    }

    this.empresas.unshift(novaEmpresa);
    this.mensagem = `Empresa ${novaEmpresa.nome} cadastrada com sucesso.`;
    this.empresa = {
      nome: '',
      cnpj: '',
      segmento: '',
      fundacao: '',
      email: '',
      telefone: '',
      endereco: '',
      cidade: '',
      estado: '',
      responsavel: '',
      observacoes: ''
    };
  }
}
