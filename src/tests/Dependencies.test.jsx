describe('react-leaflet', () => {
  test('Verifica se react-leaflet está instalada', () => {
    const packageJSON = require('../../package.json');
    expect(packageJSON.dependencies['react-leaflet']).toBeDefined();
    expect(packageJSON.dependencies['leaflet']).toBeDefined();
  });
});

describe('react-router-dom', () => {
  test('Verifica se react-router-dom está instalado', () => {
    const packageJSON = require('../../package.json');
    expect(packageJSON.dependencies['react-router-dom']).toBeDefined();
  });
});

describe('styled-components', () => {
  test('Verifica se styled-components está instalado', () => {
    const packageJSON = require('../../package.json');
    expect(packageJSON.dependencies['styled-components']).toBeDefined();
  });
});
