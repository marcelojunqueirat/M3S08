import { render, waitFor, screen } from "@testing-library/react"
import HomePage from "../../pages/HomePage"

global.fetch = jest.fn(() => Promise.resolve({
  json: () => ([
    { id: 1, title: 'Tarefa 1', status: 'Pendente' },
    { id: 2, title: 'Tarefa 2', status: 'Andamento' },
    { id: 3, title: 'Tarefa 3', status: 'Concluído' }
  ])
}));

beforeEach(() => {
  fetch.mockClear();
})

describe('HomePage', () => {
  test('Lista sendo renderizada com itens', async () => {
    render(<HomePage />)

    expect(fetch).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Tarefa 1 - Pendente')).toBeInTheDocument(),
      expect(screen.getByText('Tarefa 2 - Andamento')).toBeInTheDocument(),
      expect(screen.getByText('Tarefa 3 - Concluído')).toBeInTheDocument()
    });

    const lista = screen.getAllByRole('listitem');

    expect(lista.length).toBeGreaterThan(2)

  })
})