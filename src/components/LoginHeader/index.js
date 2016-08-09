/**
*
* LoginHeader
*
*/

import React from 'react';

import styles from './styles.css';

function LoginHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Login</h1>
        <a>Home</a> | <a>Login</a>
      </div>
    </div>
  );
}

export default LoginHeader;
