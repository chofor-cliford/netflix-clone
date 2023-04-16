import React, { useState } from 'react'
import { HeaderContainer, Logo } from './styles'
import logo from '../../assets/logo.png';
import { Button } from '../../globalStyles';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    setIsSignup((prev) => !prev)

    if (!isSignup) {
      navigate('/login');
    } else {
      navigate('/signup')
    }
  }

  return (
    <HeaderContainer>
      <Link to='/'>
        <Logo src={logo} alt='logo' />
      </Link>   
      <Button onClick={handleSignup}>
        {isSignup ? 'Sign Up':'Sign In'}
      </Button>
      
    </HeaderContainer>
  )
}

export default Header