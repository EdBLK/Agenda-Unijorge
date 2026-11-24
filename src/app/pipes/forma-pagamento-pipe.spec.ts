import { FormaPagamentoPipe } from './forma-pagamento-pipe';

describe('FormaPagamentoPipe', () => {
  const pipe = new FormaPagamentoPipe();

  it('exibe Pix', () => {
    expect(pipe.transform('pix')).toBe('Pix');
  });

  it('exibe cartão de crédito', () => {
    expect(pipe.transform('cartao')).toBe('Cartão de crédito');
  });

  it('exibe boleto', () => {
    expect(pipe.transform('boleto')).toBe('Boleto');
  });

  it('exibe dinheiro', () => {
    expect(pipe.transform('dinheiro')).toBe('Dinheiro');
  });

  it('exibe não informado para string vazia', () => {
    expect(pipe.transform('')).toBe('Não informado');
  });

  it('exibe não informado para null', () => {
    expect(pipe.transform(null)).toBe('Não informado');
  });
});
