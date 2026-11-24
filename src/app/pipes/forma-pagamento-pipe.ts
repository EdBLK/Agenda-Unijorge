import { Pipe, PipeTransform } from '@angular/core';

export type FormaPagamento = 'pix' | 'cartao' | 'boleto' | 'dinheiro' | '';

@Pipe({
  name: 'formaPagamento',
})
export class FormaPagamentoPipe implements PipeTransform {
  private readonly nomes: Record<FormaPagamento, string> = {
    pix: 'Pix',
    cartao: 'Cartão de crédito',
    boleto: 'Boleto',
    dinheiro: 'Dinheiro',
    '': 'Não informado',
  };

  transform(valor: FormaPagamento | null | undefined): string {
    if (!valor) {
      return 'Não informado';
    }

    return this.nomes[valor];
  }
}
