/**
*
* DocumentList
*
*/

import React from 'react';

import DocumentItem from '../DocumentItem';

import styles from './styles.css';

function DocumentList({ items }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{items.map((item, key) => <DocumentItem key={key} {...item} />)}
    	</div>
    </div>
  );
}

DocumentList.defaultProps = {
	items: [
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/'
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/'
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/'
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/'
		},
		{
			title: 'Título do arquivo - etc etc etc',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam itaque repellendus alias doloremque quos. Voluptate quidem, minus maxime veniam placeat laudantium praesentium sequi! Tempore cumque, natus corporis reprehenderit laudantium tenetur!',
			img: 'http://lorempixel.com/250/140/'
		},
	]
};

export default DocumentList;
