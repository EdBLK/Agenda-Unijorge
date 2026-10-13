import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Evento } from '../../models/evento';
import {
  validarData,
  validarEmailResponsavel,
  validarLocal,
  validarTitulo,
  validarVagas,
} from '../../models/evento.validacao';

type CampoEvento = 'titulo' | 'data' | 'local' | 'emailResponsavel' | 'vagas';

@Component({
  selector: 'app-cadastro-evento',
  imports: [FormsModule],
  templateUrl: './cadastro-evento.html',
  styleUrl: './cadastro-evento.css',
})
export class CadastroEvento {
  locais = ['Auditório', 'Laboratório 1', 'Laboratório 2', 'Sala 101'];

  evento: Evento = {
    id: 0,
    titulo: '',
    data: '',
    local: '',
    emailResponsavel: '',
    vagas: null,
  };

  eventos: Evento[] = [];

  private proximoId = 1;

  camposTocados: Record<CampoEvento, boolean> = {
    titulo: false,
    data: false,
    local: false,
    emailResponsavel: false,
    vagas: false,
  };

  get erros() {
    return {
      titulo: validarTitulo(this.evento.titulo),
      data: validarData(this.evento.data),
      local: validarLocal(this.evento.local),
      emailResponsavel: validarEmailResponsavel(this.evento.emailResponsavel),
      vagas: validarVagas(this.evento.vagas, this.evento.local),
    };
  }

  get temErro(): boolean {
    return Object.values(this.erros).some((mensagem) => mensagem !== null);
  }

  tocarCampo(campo: CampoEvento): void {
    this.camposTocados[campo] = true;
  }

  onVagasChange(value: string | number | null): void {
    this.evento.vagas = value === '' || value === null || value === undefined ? null : Number(value);
  }

  salvar(): void {
    if (this.temErro) {
      return;
    }

    this.eventos.push({
      id: this.proximoId++,
      titulo: this.evento.titulo.trim(),
      data: this.evento.data,
      local: this.evento.local,
      emailResponsavel: this.evento.emailResponsavel.trim(),
      vagas: this.evento.vagas,
    });

    this.evento = {
      id: 0,
      titulo: '',
      data: '',
      local: '',
      emailResponsavel: '',
      vagas: null,
    };

    this.camposTocados = {
      titulo: false,
      data: false,
      local: false,
      emailResponsavel: false,
      vagas: false,
    };
  }
}
