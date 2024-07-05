import { screen } from '@testing-library/react';
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";

describe('Testa o header da aplicação', () => {
  test('01. Testa se o header esta presente na pagina e suas funcionalidades', async () => {
    renderWithRouter(<App />, ['/']);

    const header = screen.getByTestId('header');
    expect(header).toBeVisible();

    const homeBtn = screen.getByTestId('home-link');
    const newsBtn = screen.getByTestId('news-link');
    const releasesBtn = screen.getByTestId('releases-link');
    const favoritesBtn = screen.getByTestId('favorites-link');
    expect(homeBtn && newsBtn && releasesBtn && favoritesBtn).toBeVisible();
  })
})