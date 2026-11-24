import { DiasParaPipe } from './dias-para-pipe';

describe('DiasParaPipe', () => {
  const pipe = new DiasParaPipe();
  const hoje = new Date(2026, 10, 10);

  it('exibe Hoje para a data atual', () => {
    expect(pipe.transform('2026-11-10', hoje)).toBe('Hoje');
  });

  it('exibe Amanhã para o dia seguinte', () => {
    expect(pipe.transform('2026-11-11', hoje)).toBe('Amanhã');
  });

  it('calcula dez dias restantes', () => {
    expect(pipe.transform('2026-11-20', hoje)).toBe('Faltam 10 dias');
  });

  it('calcula dias em outro mês', () => {
    expect(pipe.transform('2026-12-01', hoje)).toBe('Faltam 21 dias');
  });

  it('exibe Encerrado para data passada', () => {
    expect(pipe.transform('2026-11-09', hoje)).toBe('Encerrado');
  });

  it('retorna vazio para string vazia', () => {
    expect(pipe.transform('', hoje)).toBe('');
  });

  it('retorna vazio para data inválida', () => {
    expect(pipe.transform('data', hoje)).toBe('');
  });
});
