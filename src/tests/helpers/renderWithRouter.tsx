import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component: React.ReactElement, historyEntries = ['/']) => {
  return render(
    <MemoryRouter initialEntries={ historyEntries }>
      {component}
    </MemoryRouter>,
  );
};

export default renderWithRouter;
