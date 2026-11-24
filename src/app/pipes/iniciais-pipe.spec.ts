import { IniciaisPipe } from './iniciais-pipe';

describe('IniciaisPipe', () => {
  const pipe = new IniciaisPipe();

  it('usa a primeira letra do primeiro e do último nome', () => {
    expect(pipe.transform('Maria da Silva Santos')).toBe('MS');
  });

  it('remove espaços extras e ignora palavras de ligação', () => {
    expect(pipe.transform('  joão   guedes de brito ')).toBe('JB');
  });

  it('usa somente uma inicial para nome único', () => {
    expect(pipe.transform('Ana')).toBe('A');
  });

  it('retorna vazio para string vazia', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('retorna vazio para null', () => {
    expect(pipe.transform(null)).toBe('');
  });
});
