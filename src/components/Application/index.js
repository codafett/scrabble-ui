import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import {
  ApolloProvider,
  ApolloClient,
  split,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import Helmet from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import GlobalStyles from '../../styles/globalStyles';
import Games from '../Games';
import storageManager from '../../helpers/storageManager';
import RequireAuth from '../Auth';
import Login from '../Login';
import MainLayout from '../MainLayout';
import Game from '../Game';
import NewGame from '../NewGame';

export const DefaultLayout = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={matchProps => (
      <MainLayout>
        <Component {...matchProps} />
      </MainLayout>
    )}
  />
);

DefaultLayout.propTypes = {
  component: PropTypes.any,
};

function createHttpLink() {
  const httpLinkConfig = {
    uri: '/graphql',
  };
  const token = storageManager.getIdToken();
  console.log(token);
  if (token) {
    httpLinkConfig.headers = {
      'x-access-token': token,
    };
  }
  // Create an http link:
  return new HttpLink(httpLinkConfig);
}

function createWsLink() {
  const subscriptionPrefix = window.location.protocol === 'https:'
    ? 'wss'
    : 'ws';
  const subscriptionUri = `${subscriptionPrefix}://${window.location.host}/subscriptions`;
  return new WebSocketLink({
    uri: subscriptionUri,
    options: {
      reconnect: true,
      connectionParams: {
        authToken: storageManager.getIdToken(),
      },
    },
  });
}
// Create a WebSocket link:

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
function createLink() {
  return split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    createWsLink(),
    createHttpLink(),
  );
}

const getClient = () => {
  const apolloConfig = {
    cache: new InMemoryCache(),
    link: createLink(),
  };
  return new ApolloClient(apolloConfig);
};

export default function Application() {
  return (
    <ApolloProvider client={getClient()}>
      <Helmet
        titleTemplate="%s - ScrabbleBag"
        defaultTitle="ScrabbleBag"
      >
        <meta name="description" content="ScrabbleBag" />
      </Helmet>
      <ToastContainer
        position="top-center"
        hideProgressBar
        autoClose={1500}
        className="toast-container"
      />
      <GlobalStyles />
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                to="/login"
              />
            )}
          />
          <DefaultLayout path="/home" component={RequireAuth(Games)} />
          <DefaultLayout path="/newgame" component={RequireAuth(NewGame)} />
          <DefaultLayout path="/games" component={RequireAuth(Games)} />
          <DefaultLayout path="/game/:id" component={RequireAuth(Game)} />
          <DefaultLayout path="/login" component={Login} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}
