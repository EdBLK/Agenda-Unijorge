import { TelefonePipe } from './telefone-pipe';

describe('TelefonePipe', () => {
  const pipe = new TelefonePipe();

  it('formata celular com 11 dígitos', () => {
    expect(pipe.transform('71988887777')).toBe('(71) 98888-7777');
  });

  it('formata telefone fixo com 10 dígitos', () => {
    expect(pipe.transform('7133334444')).toBe('(71) 3333-4444');
  });

  it('reconhece um telefone já formatado', () => {
    expect(pipe.transform('(71) 98888-7777')).toBe('(71) 98888-7777');
  });

  it('devolve valores com formato não reconhecido', () => {
    expect(pipe.transform('123')).toBe('123');
  });

  it('devolve vazio para null', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('devolve vazio para string vazia', () => {
    expect(pipe.transform('')).toBe('');
  });
});
