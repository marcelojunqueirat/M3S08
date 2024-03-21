import { useState } from "react"
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if ((username || username.length > 0) && (password || password.length > 0)) {
        navigate('/signin');
      } else {
        alert('Preencha usuário e senha.')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="sign">
          <input placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  )
}

export default SignupPage;