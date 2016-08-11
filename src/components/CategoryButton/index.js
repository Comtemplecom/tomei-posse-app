/**
*
* CategoryButton
*
*/

import React from 'react';


import styles from './styles.css';

function CategoryButton({ change, name, active }) {
  return (
    <button
      className={active ? styles.activeButton : styles.button}
      onClick={() => change(name)}
    >
    	{name}
    </button>
  );
}

CategoryButton.propTypes = {
  change: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
  active: React.PropTypes.bool.isRequired,
};

export default CategoryButton;
