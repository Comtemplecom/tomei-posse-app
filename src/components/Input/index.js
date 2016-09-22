/**
*
* Input
*
*/

import React from 'react';

import styles from './styles.css';

function Input({ onChange, title, type, value, name }) {
  return (
    <div className={styles.container}>
      {title &&
        <label htmlFor={title}>{title}</label>
      }
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
  name: React.PropTypes.string,
  type: React.PropTypes.string,
  value: React.PropTypes.string,
};

export default Input;
