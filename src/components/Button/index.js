/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';


function Button({ type, label, small, dark, rounded, onClick }) {
  const getStyle = () => {
    let style = {};
    if (small) {
      style.padding = '7px 14px';
      style.fontSize = 11;
    }
    if (rounded) {
      style.borderRadius = 4;
    }
    if (dark) {
      style.color = '#fff';
      style.background = '#000';
    }
    return style;
  };

  const getClass = () => {
    let buttonClass = [styles.buttonBase];
    if (dark) {
      buttonClass.push(styles.buttonDark)
    }
    return buttonClass.join(' ')
  }
  return (
    <button
      className={getClass()}
      type={type}
      style={getStyle()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  type: '',
  small: false,
  dark: false,
  rounded: false,
};

Button.propTypes = {
  type: React.PropTypes.string,
  label: React.PropTypes.string,
  dark: React.PropTypes.bool,
  small: React.PropTypes.bool,
  rounded: React.PropTypes.bool,
};

export default Button;
