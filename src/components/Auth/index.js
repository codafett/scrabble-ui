import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StorageManager from '../../helpers/storageManager';
import { Redirect } from 'react-router-dom';

// Higher Order Component
export default (ComposedComponent) => {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object,
    };

    componentWillMount() {
      this.authenticate();
    }

    componentWillUpdate() {
      this.authenticate();
    }

    authenticate() {
      // If we have a token consider the user logged in
      if (!StorageManager.getIdToken()) {
        return <Redirect to="/Login"/>
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  Authentication.propTypes = {
    isAuthenticated: PropTypes.bool,
  };

  return Authentication;
};

// In some other location
// we want to use this HOC
/*

 import Authentication // This is the HOC
 import Resources // This is the component I want to wrap

 const ComposedComponent = Authentication(Resources);

 // In some render method
 <ComposedComponent resources=(resourceList)/>

 */
