import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasPara',
})
export class DiasParaPipe implements PipeTransform {
  transform(data: string | null | undefined, hoje: Date = new Date()): string {
    if (!data) {
      return '';
    }

    const partes = data.split('-').map(Number);
    if (partes.length !== 3 || partes.some(Number.isNaN)) {
      return '';
    }

    const [ano, mes, dia] = partes;
    const eventoUtc = Date.UTC(ano, mes - 1, dia);
    const hojeUtc = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
    const diferencaDias = Math.round((eventoUtc - hojeUtc) / 86_400_000);

    if (diferencaDias < 0) {
      return 'Encerrado';
    }

    if (diferencaDias === 0) {
      return 'Hoje';
    }

    if (diferencaDias === 1) {
      return 'Amanhã';
    }

    return `Faltam ${diferencaDias} dias`;
  }
}
