import React from 'react';
import { useState } from 'react';
import { BackgroundImage, Header } from '../../components';
import { Button } from '../../globalStyles';
import { Auth } from '../../utils/firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { Form, Input, SignupContainer, SignupWrapper, SignupWrappers, Text, TextContainer } from './styles';
import { useNavigate } from 'react-router';

const initailState ={
  email: '',
  password: ''
}

const Signup = () => {
  const [isPassword, setIsPassword] = useState(false);
  const [formData, setFormData] = useState(initailState);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSignup = async(e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(Auth, email, password);
  } 
   
  onAuthStateChanged(Auth, (user) => {
    if(user) navigate('/');
  })
  const { email, password } = formData;

  return (
  <SignupContainer>
    <BackgroundImage />
    <SignupWrappers>  
      <Header />
      <SignupWrapper>
        <TextContainer>
          <Text>Unlimited movies, TV shows and more</Text>
          <h4>Watch anywhere. Cancle anytime</h4>
          <h6>Ready to watch? Enter your email to create or restart membership</h6>
        </TextContainer>
        <Form password={isPassword? true : false}>
          <Input type='text' placeholder='Email Address' name='email' value={email} onChange={handleChange} />
          {isPassword && <Input type='password' placeholder='password' name='password' value={password} onChange={handleChange}/>}
          {!isPassword && <Button onClick={() => setIsPassword(true)} borderR>Get Started</Button>}
        </Form>
        <Button onClick={handleSignup}>Sign Up</Button>
      </SignupWrapper>
    </SignupWrappers>
  </SignupContainer>
  )
}


export default Signup;