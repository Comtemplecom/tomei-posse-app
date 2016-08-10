/**
*
* DocumentList
*
*/

import React from 'react';

import DocumentItem from '../DocumentItem';

import styles from './styles.css';

function DocumentList({ items, current }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{items.map((item, key) => {
            if (item.category.indexOf(current) === -1 && current !== 'Todos') {
              return false;
            }
            return <DocumentItem key={key} {...item} />;
        })}
    	</div>
    </div>
  );
}

DocumentList.defaultProps = {
	items: [
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/',
      category: 'Categoria 1',
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/',
      category: 'Categoria 1',
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/',
      category: 'Categoria 2',
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/',
      category: 'Categoria 3',
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/',
      category: 'Categoria 4',
		},
	]
};

export default DocumentList;
