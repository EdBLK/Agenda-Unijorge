import { Tipo } from './pessoa/pessoa.model';

export function validarNome(nome: string): string | null {
  return nome.trim() ? null : 'Nome é obrigatório.';
}

export function validarEmail(email: string): string | null {
  const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return formatoValido ? null : 'E-mail em formato inválido.';
}

export function validarTelefone(telefone: string, tipo: Tipo): string | null {
  const digitos = telefone.replace(/\D/g, '');

  if (digitos === '') {
    return tipo === 'professor' ? 'Professor precisa informar o telefone.' : null;
  }
  return digitos.length === 10 || digitos.length === 11
    ? null
    : 'Telefone deve ter 10 ou 11 dígitos (com DDD).';
}