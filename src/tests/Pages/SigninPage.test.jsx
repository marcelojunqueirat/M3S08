
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SigninPage from '../../pages/SigninPage';
import { useAuth } from '../../context/AuthContext';

jest.mock('../../context/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('SigninPage', () => {
  test('Teste de renderização - componente', () => {
    const login = jest.fn();
    useAuth.mockReturnValue({ login });
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <SigninPage />
      </MemoryRouter>
    );

    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const submitButton = getByText('Login');
    const signupLink = getByText('Signup');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(signupLink).toBeInTheDocument();
  });
});