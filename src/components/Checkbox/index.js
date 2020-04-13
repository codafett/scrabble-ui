/**
*
* Checkbox
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSquare,
} from '@fortawesome/free-regular-svg-icons';

import {
  CheckboxWrapper,
  CheckboxIconWrapper,
  CheckboxText,
  CheckboxListWrapper,
} from './styles';
import defaultCheckboxStyle from './checkboxStyles';

export const CheckboxList = ({
  pt,
  pr,
  pb,
  pl,
  children,
}) => (
  <CheckboxListWrapper
    pt={pt}
    pr={pr}
    pb={pb}
    pl={pl}
  >
    {children}
  </CheckboxListWrapper>
);

CheckboxList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  pt: PropTypes.string,
  pr: PropTypes.string,
  pb: PropTypes.string,
  pl: PropTypes.string,
};

CheckboxList.defaultProps = {
  pt: '0px',
  pr: '0px',
  pb: '0px',
  pl: '0px',
};

function renderCheckboxText(text) {
  return text
    ? (
      <CheckboxText>
        {text}
      </CheckboxText>
    )
    : null;
}
function Checkbox({ text, checked, onChecked, style, testid, fontSize, disabled }) {
  function handleChecked(e) {
    e.stopPropagation();
    if (!disabled) {
      onChecked(!checked, e);
    }
  }
  console.log('checkbox', checked);
  return (
    <CheckboxWrapper onClick={handleChecked} checked={checked} disabled={disabled} style={style} data-testid={testid}>
      <CheckboxIconWrapper visible={checked} fontSize={fontSize}>
        <FontAwesomeIcon icon={faCheckSquare} />
      </CheckboxIconWrapper>
      <CheckboxIconWrapper visible={!checked} fontSize={fontSize}>
        <FontAwesomeIcon icon={faSquare} />
      </CheckboxIconWrapper>
      {renderCheckboxText(text)}
    </CheckboxWrapper>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChecked: PropTypes.func.isRequired,
  style: PropTypes.object,
  testid: PropTypes.string,
  fontSize: PropTypes.string,
  disabled: PropTypes.bool,
};

Checkbox.defaultProps = {
  style: defaultCheckboxStyle,
  fontSize: 'inherit',
};

export default Checkbox;
