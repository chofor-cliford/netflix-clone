import React from 'react';
import { useState } from 'react';
import { BackgroundImage, Header } from '../../components';
import { Button } from '../../globalStyles';
import { Auth } from '../../utils/firebase-config';
import {  onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { Form, FormContainer, InputContainer, Title } from './styles';
import { Input, SignupContainer, SignupWrappers } from '../Signup/styles';

const initailState ={
  email: '',
  password: ''
}

const Login = () => {
  const [formData, setFormData] = useState(initailState);
  const navigate = useNavigate();

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  }
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(Auth, email, password);
  }
   
  onAuthStateChanged(Auth, (user) => {
    if(user) {
      navigate('/');
      
    }
  })
  const { email, password } = formData;
  return (
  <SignupContainer>
    <BackgroundImage />
    <SignupWrappers>
      <Header />
      <FormContainer>
        <Form>
          <Title>
            <h3>Login</h3>
          </Title>
          <InputContainer>
            <Input small type='text' placeholder='Email Address' name='email' value={email} onChange={handleChange} />
            <Input small type='password' placeholder='password' name='password' value={password} onChange={handleChange}/>
            <Button onClick={handleLogin}>Login</Button>
          </InputContainer>
        </Form>
      </FormContainer>
    </SignupWrappers>
  </SignupContainer>
)
}


export default Login;