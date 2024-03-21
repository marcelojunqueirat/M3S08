import { NavLink } from "react-router-dom"
import { Sidebar } from "../../styles/styles";

function SidebarComponent({theme}) {

  return (
    <Sidebar theme={theme}>
      <nav style={{ 'display': 'flex', 'flexDirection': 'column' }}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/pharmacies">Pharmacies</NavLink>
        <NavLink to="/medicines">Medicines</NavLink>
      </nav>
    </Sidebar>
  )
}

export default SidebarComponent;