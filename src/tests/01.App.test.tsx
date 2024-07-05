import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import renderWithRouter from "./helpers/renderWithRouter";
import App from "../App";

describe('Testa a pagina inicial da aplicação', () => {
  test('01. Testa se o header esta presente na pagina e suas funcionalidades', () => {
    renderWithRouter(<App />, ['/']);

    const header = screen.getByTestId('header');
    expect(header).toBeVisible();
  })
})