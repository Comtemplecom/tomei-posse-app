/**
*
* UserForm
*
*/

import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles.css';

function UserForm({ email, password, password2, onChange, submit, error }) {
  return (
    <div className={styles.wrapper}>
      <h1>Cadastrar novo usuário</h1>
      <form className={styles.container} onSubmit={submit}>
        <Input
          title="E-mail do usuário"
          name="email"
          type="email"
          value={email}
          onChange={onChange}
        />
        <Input
          title="Senha"
          name="password"
          type="text"
          value={password}
          onChange={onChange}
        />
        <Input
          title="Repetir senha"
          name="password2"
          type="text"
          value={password2}
          onChange={onChange}
        />
        {error === 'passwordMismatch' &&
          <span className={styles.error}>Senha não é igual</span>
        }
        {error === 'passwordShort' &&
          <span className={styles.error}>Senha deve ter no mínimo 6 caracteres</span>
        }
        <Button
          type="Submit"
          label="Cadastrar"
          small
          dark
          rounded
        />
    </form>
    </div>
  );
}

UserForm.defaultProps = {

};

UserForm.propTypes = {
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  password2: React.PropTypes.string,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};

export default UserForm;
