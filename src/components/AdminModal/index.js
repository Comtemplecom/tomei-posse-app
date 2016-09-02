/**
*
* AdminModal
*
*/

import React from 'react';
import { Fieldset, Field } from 'react-forms';
import Dropzone from 'react-dropzone';
const Line = require('rc-progress').Line;
import Icon from 'react-evil-icons';

import Button from '../Button';

import styles from './styles.css';

function AdminModal({
	formValue, titleError, createCat, imageUpload, docUpload, categoryList,
	onSubmit, handleToggleCat, handleCreateCatSubmit, handleCatChange, handleImgUpload, handleDocUpload, handleCreateCatInput
	}) {
	return (
	    <div className={styles.wrapper}>
		    <div className={styles.container}>
		        	<form onSubmit={onSubmit}>
		        		{titleError && <span className={styles.error}>Insira o título</span>}
			        	<Fieldset formValue={formValue}>
					        <Field select="title" label="Título" />
					        <Field select="description" type="text-area" label="Descrição" />
					    	</Fieldset>
					    <span className={styles.category}>
						    <span>Categoria -
						    	{ !createCat.open && <span className={styles.link} onClick={handleToggleCat}>criar nova</span> }
						    	{ createCat.open &&
						    		<span className={styles.createCat}>
							    		<input className={styles.catInput} value={createCat.input} onChange={handleCreateCatInput} />
							    		<button onClick={handleCreateCatSubmit}>Criar</button>
							    	</span>
							    	}
						    </span>
						    <select onChange={handleCatChange}>
						    	{categoryList.map((item, key) => <option key={key} value={item.name}>{item.name}</option>)}
						    </select>
						</span>
					    <span className={styles.uploadContainer}>
					    	<span>
							    <span>Imagem de capa</span>
						    	{!imageUpload.url &&
						    		<Dropzone onDrop={handleImgUpload}>
					            		<Icon name="ei-eye" size="l" />
					            		<span>+</span>
					            		<Line percent={imageUpload.progress} strokeWidth="4" strokeColor={imageUpload.running ? "#00FF00" : "#D3D3D3"} />
						            </Dropzone>
						    	}
						    	{imageUpload.url &&
						    		<span>
						    			<img alt="preview" src={imageUpload.url} height='150' />
						    		</span>
						    	}
						    </span>
						    <span>
						    	<span>PDF</span>
						    	{!docUpload.url &&
						    		<Dropzone onDrop={handleDocUpload}>
					            		<Icon name="ei-eye" size="l" />
					            		<span>+</span>
					            		<Line percent={docUpload.progress} strokeWidth="4" strokeColor={docUpload.running ? "#00FF00" : "#D3D3D3"} />
						            </Dropzone>
						    	}
						    	{docUpload.url &&
						    		<span>
						    			Upload do <a href={docUpload.url} target='_blank'>documento</a> feito com sucesso.
						    		</span>
						    	}
						    </span>
						</span>
				        <Button
				        	label='Criar'
				        	type='submit'
				       	/>
				    </form>
		    </div>
	    </div>
	);
}

AdminModal.defaultProps = {
};

AdminModal.propTypes = {
};

export default AdminModal;
