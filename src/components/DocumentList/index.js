/**
*
* DocumentList
*
*/

import React from 'react';
import Modal from 'react-modal';

import DocumentItem from '../DocumentItem';
import Button from '../../components/Button';
import AdminModal from '../../containers/AdminModal';

import styles from './styles.css';
const modalStyle = {
  content : {
    width: '80%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay : {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
};

function DocumentList({ openModal, closeModal, current, documents, categories, admin, adminModal }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{documents.map((item, key) => {
            if (item.category.indexOf(current) === -1 && current !== 'Todos') {
              return false;
            }
            return <DocumentItem key={key} {...item} />;
        })}
        {admin &&
            <div>
              <Button label='Adicionar novo' onClick={openModal} />
              <Modal
                isOpen={adminModal}
                onRequestClose={closeModal}
                style={modalStyle}
              >
                <AdminModal closeModal={closeModal} categoryList={categories} />
              </Modal>
            </div>
        }
    	</div>
    </div>
  );
}

DocumentList.defaultProps = {
};

export default DocumentList;
