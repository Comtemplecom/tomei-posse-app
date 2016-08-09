/**
*
* MainHeader
*
*/

import React from 'react';


import styles from './styles.css';

function MainHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.line} />
        <div className={styles.title}>
          <h1>Seja bem vindo - etc etc etc</h1>
        </div>
        <div className={styles.subTitle}>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!</h3>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
