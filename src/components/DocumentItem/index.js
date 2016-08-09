/**
*
* DocumentItem
*
*/

import React from 'react';

import Button from '../Button';

import styles from './styles.css';

function DocumentItem({ title, description, img }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		<div className={styles.img}>
    			<img src={img} alt={title} />
    		</div>
    		<div className={styles.info}>
    			<h1>{title}</h1>
    			<h3>{description}</h3>
    		</div>
    		<div className={styles.button}>
    			<Button
            label="baixar"
          />
    		</div>
    	</div>
    </div>
  );
}

export default DocumentItem;
