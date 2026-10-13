import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { routes } from './app.routes';
import { CadastroEvento } from './pages/cadastro-evento/cadastro-evento';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('Agenda Unijorge');
  });

  it('should register the eventos/novo route before the wildcard route', () => {
    const eventoIndex = routes.findIndex((route) => route.path === 'eventos/novo');
    const wildcardIndex = routes.findIndex((route) => route.path === '**');

    expect(eventoIndex).toBeGreaterThan(-1);
    expect(wildcardIndex).toBeGreaterThan(-1);
    expect(eventoIndex).toBeLessThan(wildcardIndex);
    expect(routes[eventoIndex].component).toBe(CadastroEvento);
  });
});
