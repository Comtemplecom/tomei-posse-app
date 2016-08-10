/**
*
* CategoryBar
*
*/

import React from 'react';

import CategoryButton from '../CategoryButton';

import styles from './styles.css';

function CategoryBar({ change, current, items }) {
  const all = (current === 'Todos')
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
      <CategoryButton title='Todos' change={change} active={all} />
			{items.map((item, key) => {
        const active = (item.title === current);
        return <CategoryButton key={key} {...item} change={change} active={active} />
      })}
		</div>
    </div>
  );
}

CategoryBar.defaultProps = {
	items: [
		{
			title: 'Categoria 1'
		},
		{
			title: 'Categoria 2'
		},
		{
			title: 'Categoria 3'
		},
		{
			title: 'Categoria 4'
		},
		{
			title: 'Categoria 5'
		},
	]
};

CategoryBar.propTypes = {
  change: React.PropTypes.func.isRequired,
  current: React.PropTypes.string.isRequired,
  items: React.PropTypes.array,
};

export default CategoryBar;
