/**
*
* DocumentList
*
*/

import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';

import DocumentItem from '../DocumentItem';
import Button from '../../components/Button';
import Admin from '../../containers/Admin';

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

function DocumentList({ openModal, closeModal, currentCategory, documents, categories, admin, adminModal }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{documents.map((item, key) => {
            if (item.category.indexOf(currentCategory) === -1 && currentCategory !== 'Todos') {
              return false;
            }
            return <DocumentItem key={key} {...item} admin={admin} />;
        })}
        {admin &&
            <nav className={styles.navbar}>
              <Button label='Adicionar novo documento' onClick={openModal} dark />
              <Link to="/area-restrita/novo-usuario">
                <Button label='Adicionar novo usuário' onClick={openModal} dark />
              </Link>
              <Modal
                isOpen={adminModal}
                onRequestClose={closeModal}
                style={modalStyle}
              >
                <Admin closeModal={closeModal} categoryList={categories} />
              </Modal>
            </nav>
        }
    	</div>
    </div>
  );
}

DocumentList.defaultProps = {
};

export default DocumentList;
