import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './mutations';
import storageManager from '../../helpers/storageManager';
import { Redirect } from 'react-router';
import messageHelper from '../../helpers/messageHelper';
import { LoginWrapper, LoginTitle, FormLayout, FormControl, FormButtonBar } from './styles';
import Button from '../Button';
import ButtonStyles from '../Button/buttonStyles';
import Header from '../Header';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(
    LOGIN_MUTATION,
    {
      onCompleted: (result) => {
        storageManager.setIdToken(result.login.token);
        storageManager.setPermissions(result.login.permissions);
        setLoggedIn(true);
      },
      onError: error => messageHelper.renderGraphQlError(error),
    }
  );

  useEffect(
    () => {
      storageManager.clearAuthInfo();
    },
    [],
  );

  function handleSubmit() {
    login({
      variables: {
        email,
        password,
      },
    });
  }

  return loggedIn
    ? (
      <Redirect to="/games" />
    )
    : (
    <LoginWrapper>
      <Header />
      <LoginTitle>
        Login
      </LoginTitle>
      <FormLayout
        titleWidth="80px"
      >
        <FormControl>
          <span>Email</span>
          <input onChange={e => setEmail(e.target.value)} />
        </FormControl>
        <FormControl>
          <span>Password</span>
          <input
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormControl>
        <FormButtonBar>
          <Button
            onClick={handleSubmit}
            buttonStyle={ButtonStyles.primary}
            text="Login"
          />
        </FormButtonBar>
      </FormLayout>
    </LoginWrapper>
  )
}

export default Login;
