import styled from 'styled-components';
import { NavLink as Links } from 'react-router-dom';

export const NavContainer = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

export const NavWrappers = styled.nav`
  display: flex;
  background: ${({scrolled}) => (scrolled ? 'none':'#000')};
  position: sticky;
  top: 0;
  height: 6.5rem;
  width: 100%;
  
  justify-content: space-between;
  position: fixed;
  z-index: 2;
  padding: 0 2rem;
  align-items: center;
  transition: 0.3s ease-in-out;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem; 
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const Logo = styled.img`
  height: 4rem;
  cursor: pointer;
`;

export const NavLinkList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 2rem;

`;

export const NavLink = styled.li`
  color: #fff;
`;

export const Link = styled(Links)`
  text-decoration: none;
  color: #fff;
  &.active{
    font-weight: bold;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SearchWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  padding-left: 0.5rem;
  border: 1px solid #fff;
  border-radius: 1.8px;
`;

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg{
   color: #fff;
   font-size: 1rem;
  }
`;


export const Input = styled.input`
  outline: none;
  transition: 0.3s ease-in-out;
  border: none;
  padding: 0.3rem;
  border-radius: 2.2px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  
`;

export const LogoutButton = styled.button`
  background: none;
  cursor: pointer;
  border: none;

  svg{
    color: #f34242;
    font-size: 1.2rem;
  }
`;
