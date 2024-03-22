import { render, waitFor, screen } from "@testing-library/react"
import MedicinesPage from "../../pages/MedicinesPage";

global.fetch = jest.fn(() => Promise.resolve({
  json: () => ([
    { id: 1, name: 'Medicamento 1', price: 'R$ 10,99' },
    { id: 2, name: 'Medicamento 2', price: 'R$ 11,99' },
    { id: 3, name: 'Medicamento 3', price: 'R$ 0,65' }
  ])
}));

beforeEach(() => {
  fetch.mockClear();
})

describe('HomePage', () => {
  test('Lista retornando objetos', async () => {
    render(<MedicinesPage />)

    expect(fetch).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText('Medicamento 1 - R$ 10,99')).toBeInTheDocument(),
      expect(screen.getByText('Medicamento 2 - R$ 11,99')).toBeInTheDocument(),
      expect(screen.getByText('Medicamento 3 - R$ 0,65')).toBeInTheDocument()
    });

    // const lista = screen.getAllByRole('listitem');

    // expect(lista.length).toBeGreaterThan(2)

  })
})