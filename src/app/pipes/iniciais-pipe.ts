import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iniciais',
})
export class IniciaisPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor?.trim()) {
      return '';
    }

    const ligacoes = new Set(['de', 'da', 'do', 'das', 'dos', 'e']);
    const partes = valor
      .trim()
      .split(/\s+/)
      .filter((parte) => !ligacoes.has(parte.toLocaleLowerCase('pt-BR')));

    if (partes.length === 0) {
      return '';
    }

    const primeira = partes[0][0];
    const ultima = partes.length > 1 ? partes[partes.length - 1][0] : '';

    return `${primeira}${ultima}`.toUpperCase();
  }
}
