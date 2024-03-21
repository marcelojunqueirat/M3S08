import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../../styles/styles";
import { useThemeProvider } from "../../context/ThemeContext";

function HeaderComponent({ theme }) {
    const { logout } = useAuth();
    const { toggleTheme } = useThemeProvider();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/signin');
    }

    return (
        <Header theme={theme}>
            <h2>Fake Systems</h2>
            <div className="button-logout">
                <button onClick={toggleTheme}>Mudar Tema</button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </Header>
    )
}

export default HeaderComponent;