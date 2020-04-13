import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from './mutations';
import storageManager from '../../helpers/storageManager';
import { Redirect } from 'react-router';

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState();
  const [login] = useMutation(
    LOGIN_MUTATION,
    {
      onCompleted: (result) => {
        storageManager.setIdToken(result.login.token);
        storageManager.setPermissions(result.login.permissions);
        setLoggedIn(true);
      },
      onError: error => console.log(error),
    }
  );

  useEffect(
    () => {
      storageManager.clearAuthInfo();
    },
    [],
  );

  function handleSubmit() {
    console.log(email);
    console.log(password);
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
    <React.Fragment>
      <h1>Login</h1>
      <div>
        <div>
          <span>Email</span>
          <input onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <input onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSubmit}>
          Login
        </button>
      </div>
    </React.Fragment>
  )
}

export default Login;
