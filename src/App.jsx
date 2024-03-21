import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RoutesComponent from './routes/Routes';
import HeaderComponent from './components/Header';
import SidebarComponent from './components/Sidebar';
import { useAuth } from './context/AuthContext.jsx';
import { useThemeProvider } from './context/ThemeContext.jsx'
import { GridContainer } from './styles/styles.jsx';


function App() {
  const { isAuthenticated } = useAuth();
  const {theme} = useThemeProvider()

  return (
    <>
        <Router>
          {isAuthenticated ? (
            <GridContainer className="grid-container" theme={theme}>
              <HeaderComponent theme={theme} />
              <SidebarComponent theme={theme} />
              <div className="content">
                <RoutesComponent />
              </div>
            </GridContainer>
          ) : (
            <RoutesComponent />
          )}
        </Router>
    </>
  )
}

export default App
