/**
*
* CategoryBar
*
*/

import React from 'react';

import CategoryButton from '../CategoryButton';

import styles from './styles.css';

function CategoryBar({ items }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
			{items.map((item, key) => <CategoryButton key={key} {...item} />)}
		</div>
    </div>
  );
}

CategoryBar.defaultProps = {
	items: [
		{
			title: 'Categoria 1',
			active: false,
		},
		{
			title: 'Categoria 2',
			active: false,
		},
		{
			title: 'Categoria 3',
			active: true,
		},
		{
			title: 'Categoria 4',
			active: false,
		},
		{
			title: 'Categoria 5',
			active: false,
		},
	]
};

export default CategoryBar;
