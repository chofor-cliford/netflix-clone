import React, { useState } from 'react';
import { links } from '../../utils/data';
import { Input, Link, Logo, LogoutButton, NavContainer, NavLink, NavLinkList, NavWrapper, NavWrappers, SearchButton, SearchContainer, SearchWrapper } from './styles';
import logo from '../../assets/logo.png';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { FaPowerOff, FaSearch } from 'react-icons/fa';
import { Auth } from '../../utils/firebase-config';
import { useNavigate } from 'react-router';
import { getMoviesBySearch, setEmail } from '../../feautures/slices/netflixSlice';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = ({isScroll}) => {
    const [showSearch, setShowSearch] = useState(false);
    const [inputHover, setInputHover] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { email } = useSelector((state) => ({...state.netflix}))

    onAuthStateChanged(Auth, (user) => {
        if(!user) 
        navigate('/login');
        dispatch(setEmail(user.email));
      })
    
      const handleSearch = async(e) => {
        await setSearchInput(e.target.value.trim());
        console.log(e.target.value.trim());

        if(e.keyCode === 13) dispatch(getMoviesBySearch({searchTerm: searchInput, email}))
      }

  return (
    <NavContainer>
        <NavWrappers scrolled={ isScroll ? true : false}>
            <NavWrapper>
                <Logo src={logo} alt='logo' onClick={() => navigate('/')}/>
                <NavLinkList>
                    {links.map(({name, link}) => (
                        <NavLink key={name}>
                            <Link to={link}>{name}</Link>
                        </NavLink>
                    ))}
                </NavLinkList>
            </NavWrapper>
            <SearchContainer>
                {showSearch ? (
                    <SearchWrapper>
                        <SearchButton>
                            <FaSearch />
                        </SearchButton> 
                        <Input 
                            type='text' 
                            placeholder='Search'
                            autoFocus
                            onMouseEnter={() => { setInputHover(true);}}
                            onMouseLeave={() => setInputHover(false)}
                            onBlur={() => {
                                setInputHover(false)
                                setShowSearch(false)
                                }}
                            onKeyDown={handleSearch}
                        /> 
                    </SearchWrapper>
                    ):(
                    <SearchButton 
                        onFocus={() => setShowSearch((prev) => !prev)} 
                        onBlur={() => { if(!inputHover) setShowSearch(false)} }>
                        <FaSearch />
                   </SearchButton>
                )}
                 
                <LogoutButton onClick={() => {signOut(Auth); setEmail(undefined)}}>
                    <FaPowerOff />
                </LogoutButton>
            </SearchContainer>
        </NavWrappers>
    </NavContainer>
  )
}

export default Navbar