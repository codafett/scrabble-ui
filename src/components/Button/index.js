import React from 'react';
import PropTypes from 'prop-types';

import { ButtonIcon, ButtonWrapper, ButtonText } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonStyles from './buttonStyles';

const Button = ({
  onClick,
  icon,
  text,
  buttonStyle,
  disabled,
}) => {

  function renderIcon() {
    return icon ? (
      <ButtonIcon
        marginRight={text ? '6px' : '0'}
      >
        <FontAwesomeIcon
          icon={icon}
        />
      </ButtonIcon>
    )
    : null;
  }
  
  return (
    <ButtonWrapper
      onClick={onClick}
      buttonStyle={buttonStyle}
      disabled={disabled}
    >
      {renderIcon()}
      <ButtonText>
        {text}
      </ButtonText>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.object,
  text: PropTypes.string,
  buttonStyle: PropTypes.object,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  buttonStyle: ButtonStyles.primary,
}

export default Button;
