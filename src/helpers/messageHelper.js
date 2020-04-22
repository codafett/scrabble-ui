import { toast } from 'react-toastify';
import graphQLHelper from './graphQLHelper';

const MessageHelper = () => ({
  renderErrorMessage: function renderErrorMessage(error) {
    if (error) {
      let delay = 0;
      if (toast.isActive(error)) {
        toast.dismiss(error);
        delay = 1000;
      }
      toast.error(
        error,
        {
          toastId: error,
          autoClose: 3000,
          delay,
        },
      );
    }
  },

  renderErrorMessages: function renderErrorMessages(errors) {
    if (errors && errors.length) {
      errors.map(this.renderErrorMessage);
    }
  },

  renderGraphQlError: function renderGraphQlError(error) {
    if (error) {
      this.renderErrorMessages(
        graphQLHelper.getErrorMessages(error),
      );
    }
  },

  renderSuccessMessage: function renderSuccessMessage(message) {
    if (message) {
      let delay = 0;
      if (toast.isActive(message)) {
        toast.dismiss(message);
        delay = 1000;
      }
      toast.success(
        message,
        {
          toastId: message,
          delay,
        },
      );
    }
  },

  dismissMessage: function dismissMessage(toastId) {
    toast.dismiss(toastId);
  },
  
  dismissAllMessages: function dismissAllMessages() {
    toast.dismissAll();
  },
});

export default MessageHelper();
