/**
*
* DocumentList
*
*/

import React from 'react';
import Modal from 'react-modal';

import DocumentItem from '../DocumentItem';
import Button from '../../components/Button';
import AdminModal from '../../components/AdminModal';

import styles from './styles.css';
const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  },
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
};

function DocumentList({ openModal, closeModal, items, current, admin, adminModal }) {
  return (
    <div className={styles.wrapper}>
    	<div className={styles.container}>
    		{items.map((item, key) => {
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
                <AdminModal />
              </Modal>
            </div>
        }
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
