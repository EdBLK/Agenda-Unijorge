import { describe, expect, it } from 'vitest';
import {
  validarData,
  validarEmailResponsavel,
  validarLocal,
  validarTitulo,
  validarVagas,
} from './evento.validacao';

describe('Validações do evento', () => {
  it('deve validar o título entre 5 e 80 caracteres', () => {
    expect(validarTitulo('abc')).toBe('O título deve ter entre 5 e 80 caracteres.');
    expect(validarTitulo('Título válido')).toBeNull();
  });

  it('deve validar a data e rejeitar datas passadas', () => {
    const ontem = new Date();
    ontem.setDate(ontem.getDate() - 1);

    expect(validarData('')).toBe('A data não pode ficar em branco.');
    expect(validarData(`${ontem.getFullYear()}-${String(ontem.getMonth() + 1).padStart(2, '0')}-${String(ontem.getDate()).padStart(2, '0')}`)).toBe('A data não pode estar no passado.');

    const hoje = new Date();
    expect(validarData(`${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, '0')}-${String(hoje.getDate()).padStart(2, '0')}`)).toBeNull();
  });

  it('deve validar local e e-mail do responsável', () => {
    expect(validarLocal('')).toBe('O local não pode ficar em branco.');
    expect(validarLocal('Auditório')).toBeNull();
    expect(validarEmailResponsavel('responsavel@empresa.com')).toBeNull();
    expect(validarEmailResponsavel('invalido')).toBe('E-mail em formato inválido.');
  });

  it('deve validar vagas entre 1 e 200', () => {
    expect(validarVagas(null)).toBe('As vagas devem ser um número inteiro de 1 a 200.');
    expect(validarVagas(0)).toBe('As vagas devem ser um número inteiro de 1 a 200.');
    expect(validarVagas(201)).toBe('As vagas devem ser um número inteiro de 1 a 200.');
    expect(validarVagas(15)).toBeNull();
  });

  it('deve aplicar a regra bônus dos laboratórios', () => {
    expect(validarVagas(31, 'Laboratório 1')).toBe('Para Laboratório 1 ou Laboratório 2, o máximo é 30 vagas.');
    expect(validarVagas(30, 'Laboratório 1')).toBeNull();
    expect(validarVagas(30, 'Auditório')).toBeNull();
  });
});
