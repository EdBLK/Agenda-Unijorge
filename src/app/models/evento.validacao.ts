export function validarTitulo(titulo: string): string | null {
  const valor = titulo.trim();

  if (valor.length < 5 || valor.length > 80) {
    return 'O título deve ter entre 5 e 80 caracteres.';
  }

  return null;
}

export function validarData(data: string): string | null {
  if (!data || data.trim() === '') {
    return 'A data não pode ficar em branco.';
  }

  const [ano, mes, dia] = data.split('-').map(Number);

  if (!ano || !mes || !dia || Number.isNaN(ano) || Number.isNaN(mes) || Number.isNaN(dia)) {
    return 'A data não pode ficar em branco.';
  }

  const hoje = new Date();
  const hojeLocal = new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  const dataInformada = new Date(ano, mes - 1, dia);

  if (dataInformada < hojeLocal) {
    return 'A data não pode estar no passado.';
  }

  return null;
}

export function validarLocal(local: string): string | null {
  return local && local.trim() ? null : 'O local não pode ficar em branco.';
}

export function validarEmailResponsavel(emailResponsavel: string): string | null {
  const valor = emailResponsavel.trim();
  const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

  return formatoValido ? null : 'E-mail em formato inválido.';
}

export function validarVagas(vagas: number | null, local: string = ''): string | null {
  if (vagas === null || !Number.isInteger(vagas) || vagas < 1 || vagas > 200) {
    return 'As vagas devem ser um número inteiro de 1 a 200.';
  }

  if ((local === 'Laboratório 1' || local === 'Laboratório 2') && vagas > 30) {
    return 'Para Laboratório 1 ou Laboratório 2, o máximo é 30 vagas.';
  }

  return null;
}
