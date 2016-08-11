/**
*
* DocumentItem
*
*/

import React from 'react';

import Button from '../Button';

import styles from './styles.css';

function DocumentItem({ title, description, coverImg, documentUrl, category }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		<div className={styles.img}>
    			<img height='250' width='250' src={coverImg} alt={title} />
    		</div>
    		<div className={styles.info}>
    			<h1>{title}</h1>
    			<h3>{description}</h3>
    		</div>
    		<div className={styles.button}>
    			<a href={documentUrl} target='_blank'>
                    <Button
                        label="baixar"
                    />
                </a>    
    		</div>
    	</div>
    </div>
  );
}

export default DocumentItem;
