async function fetchMedicines() {
  const data = await fetch('api.com/medicines')
    .then(response => response.json());
  return data;
}

global.fetch = jest.fn(() => Promise.resolve({
  json: () => ([
    { id: 1, name: 'Medicamento 1', price: 'R$ 10,99' },
    { id: 2, name: 'Medicamento 2', price: 'R$ 11,99' },
    { id: 3, name: 'Medicamento 3', price: 'R$ 0,65' }
  ])
})
);

beforeEach(() => {
  fetch.mockClear();
})

describe('MedicinePage', () => {
  test('Lista retornando objetos', async () => {
    const json = await fetchMedicines();

    for (let index = 0; index < json.length; index++) {
      expect(json[index] && typeof json[index] === 'object').toBe(true)

    }
  })
})

describe('MedicinePage', () => {
  test('Lista retornando array', async () => {
    const json = await fetchMedicines();
    expect(Array.isArray(json)).toEqual(true);
  })
})