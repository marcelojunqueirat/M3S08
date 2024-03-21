import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext.jsx'

function SigninPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if ((username || username.length > 0) && (password || password.length > 0)) {
        let userData = { username: username, password: password };
        login(userData);
        navigate('/home');
      } else {
        alert('Usuário ou senha inválido.')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign">
          <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
          <Link to="/signup">Signup</Link>
        </div>
      </form>
    </div>
  )
}

export default SigninPage;