/**
*
* Model
*
*/

import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

import styles from './styles.css';

function Model({ userName, onChange }) {
  return (
    <div className={styles.wrapper}>
      <h1>Cadastrar novo usuário</h1>
      <form className={styles.container}>
        <Input
          title="Nome de usuário"
          type="text"
          value={userName}
          onChange={onChange}
        />
        <Input
          title="Senha"
          type="text"
          value={userName}
          onChange={onChange}
        />
        <Input
          title="Repetir senha"
          type="text"
          value={userName}
          onChange={onChange}
        />
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

Model.defaultProps = {

};

Model.propTypes = {
  props: React.PropTypes.object,
};

export default Model;
