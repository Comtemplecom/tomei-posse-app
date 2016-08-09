/**
*
* LoginForm
*
*/

import React from 'react';

import Input from '../Input';
import Button from '../Button';

import styles from './styles.css';

function LoginForm({ handleSubmit, handleUser, handlePassword, userInput, passwordInput, error }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <Input
            title="Usuário"
            value={userInput}
            onChange={handleUser}
          />
          <Input
            title="Password"
            type="password"
            value={passwordInput}
            onChange={handlePassword}
          />
          <Button
            type="Submit"
            label="Login"
            small
            dark
            rounded
          /><br />
          {error && <p className={styles.error}>{error}</p>}
          <a>Forgot password?</a>
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  handleUser: React.PropTypes.func.isRequired,
  handlePassword: React.PropTypes.func.isRequired,
  userInput: React.PropTypes.string.isRequired,
  passwordInput: React.PropTypes.string.isRequired,
};

export default LoginForm;
