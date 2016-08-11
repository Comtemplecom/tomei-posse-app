/**
*
* AdminModal
*
*/

import React from 'react';

import styles from './styles.css';

function AdminModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Adicionar novo</h1>
        <input></input>
      </div>
    </div>
  );
}

AdminModal.defaultProps = {
};

AdminModal.propTypes = {
};

export default AdminModal;
