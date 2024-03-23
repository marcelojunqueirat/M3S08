/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import CardNoticia from '../../components/CardNoticia'

describe('CardNoticia', () => {
  test('Teste de renderização - componente com props', () => {
    render(<CardNoticia title="Blink 182" />)
    expect(screen.getByText('Blink 182')).toBeInTheDocument();
  })
})