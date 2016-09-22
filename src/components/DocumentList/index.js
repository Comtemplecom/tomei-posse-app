/**
*
* DocumentList
*
*/

import React from 'react';
import DocumentItem from '../DocumentItem';

import styles from './styles.css';

function DocumentList({ currentCategory, documents, categories, admin }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{documents.map((item, key) => {
            if (item.category.indexOf(currentCategory) === -1 && currentCategory !== 'Todos') {
              return false;
            }
            return <DocumentItem key={key} {...item} admin={admin} />;
        })}
    	</div>
    </div>
  );
}

DocumentList.defaultProps = {
  currentCategory: React.PropTypes.string.isRequired,
  documents: React.PropTypes.array.isRequired,
  categories: React.PropTypes.array.isRequired,
  admin: React.PropTypes.bool.isRequired,
};

export default DocumentList;
