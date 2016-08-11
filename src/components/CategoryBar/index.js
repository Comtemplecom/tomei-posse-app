/**
*
* CategoryBar
*
*/

import React from 'react';

import CategoryButton from '../CategoryButton';

import styles from './styles.css';

function CategoryBar({ change, current, categories }) {
  const all = (current === 'Todos')
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
      <CategoryButton name='Todos' change={change} active={all} />
			{categories.map((item, key) => {
        const active = (item.title === current);
        return <CategoryButton key={key} name={item} change={change} active={active} />
      })}
		</div>
    </div>
  );
}

CategoryBar.defaultProps = {
};

CategoryBar.propTypes = {
  change: React.PropTypes.func.isRequired,
  current: React.PropTypes.string.isRequired,
  categories: React.PropTypes.array,
};

export default CategoryBar;
