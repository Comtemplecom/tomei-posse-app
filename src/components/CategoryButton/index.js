/**
*
* CategoryButton
*
*/

import React from 'react';


import styles from './styles.css';

function CategoryButton({ change, title, active }) {
  return (
    <button
      className={active ? styles.activeButton : styles.button}
      onClick={() => change(title)}
    >
    	{title}
    </button>
  );
}

CategoryButton.propTypes = {
  change: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
};

export default CategoryButton;
