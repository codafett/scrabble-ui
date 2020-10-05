import logger from './logger';
import { ServerError, AuthorisationError, AuthenticationError } from '../errors';

const checkFor = (code, errors) => errors && errors.find(e => e.extensions.code === code);

const GraphQLHelper = () => ({
  checkFor: function checkFor(
    code,
    errors,
  ) {
    return errors
      && errors.extensions
      && errors.find(e => e.extensions.code === code);
  },

  getErrorMessages: function getErrorMessages(result){
    const messages = [];
    const { networkError } = result;
    if (networkError) {
      logger.error('Network error');
      logger.error(networkError);
      throw new ServerError(networkError.message);
    }
    const graphQLErrors = (result && result.error && result.error.graphQLErrors)
      || (result && result.graphQLErrors);
    if (this.checkFor('server_error', graphQLErrors)) {
      throw new ServerError();
    }

    if (this.checkFor('authorisation_error', graphQLErrors)) {
      throw new AuthorisationError();
    }

    if (this.checkFor('authentication_error', graphQLErrors)) {
      throw new AuthenticationError();
    }
    if (graphQLErrors && graphQLErrors.length) {
      graphQLErrors.forEach(
        (e) => {
          if (e.message.indexOf('||')) {
            e.message.split('||').forEach(
              m => messages.push(m)
            );
          } else {
            messages.push(e.message);
          }
        }
      );
    }
    return messages;
  },
});

export default GraphQLHelper();
