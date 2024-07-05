import renderWithRouter from "./helpers/renderWithRouter"
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from "../App"

describe('Testa a pagina principal da aplicação', () => {
  afterEach(() => {
    vi.resetAllMocks();
  })
  test('01. Testa se o card da ultima noticia esta presente na pagina', async () => {
    vi.spyOn(global, 'fetch');
    renderWithRouter(<App />, ['/']);

    expect(global.fetch).toHaveBeenCalledTimes(2);

    const lastNewTitle = screen.getByText('Última notícia');
    expect(lastNewTitle).toBeVisible();

    const lastNew = screen.getByTestId('last-new');
    expect(lastNew).toBeVisible();
  })

  test('02. Testa se a paginação esta funcionando', async () => {
    vi.spyOn(global, 'fetch');
    renderWithRouter(<App />, ['/releases']);

    expect(global.fetch).toHaveBeenCalledTimes(2);
    
    const nextBtn = screen.getByTestId('next-page-btn');
    const prevBtn = screen.getByTestId('prev-page-btn');
    const page = screen.getByTestId('current-page');
    expect(nextBtn && prevBtn && page).toBeVisible();
    expect(page).toHaveTextContent('1');
    
    await userEvent.click(nextBtn);
    expect(global.fetch).toHaveBeenCalledTimes(3);
    
    await userEvent.click(prevBtn);
    expect(page).toHaveTextContent('1');
    expect(global.fetch).toHaveBeenCalledTimes(4);
  })
})