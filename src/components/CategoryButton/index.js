/**
*
* CategoryButton
*
*/

import React from 'react';


import styles from './styles.css';

function CategoryButton({ title, active }) {
  return (
    <button className={active ? styles.activeButton : styles.button}>
    	{title}
    </button>
  );
}

export default CategoryButton;
