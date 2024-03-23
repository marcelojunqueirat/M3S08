import { render, screen } from '@testing-library/react'
import ProfileComponent from '../../components/ProfileComponent'

describe('ProfileComponent', () => {
  test('Validando teste de integração passando parametros', () => {
    render(<ProfileComponent titulo="Lorem Ipsum" subtitulo="Lorem ipsum dolor sit amet" />)
    expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet')).toBeInTheDocument();
  })
})