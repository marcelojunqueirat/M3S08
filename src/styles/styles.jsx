import styled from 'styled-components';

export const GridContainer = styled.div`
  color: ${props => (props.theme == 'dark' ? 'white' : 'black')};
  background-color: ${props => (props.theme === 'dark' ? '#000' : '#FFF')};
`

export const Header = styled.div`
  color: ${props => (props.theme == 'dark' ? 'white' : 'black')};
  background-color: ${props => (props.theme === 'dark' ? '#1a1a1a' : '#E7E9EB')};
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-left: 36px;
  padding-right: 36px;
`

export const Sidebar = styled.div`
  color: ${props => (props.theme == 'dark' ? 'white' : 'black')};
  background-color: ${props => (props.theme === 'dark' ? '#1a1a1a' : '#E7E9EB')};
  grid-area: sidebar;
  display: flex;
  align-items: center;
  padding: 14px 30px;
`