/**
*
* Admin
*
*/

import React from 'react';
import firebase from 'firebase';
import { createValue } from 'react-forms';
import { firebaseStorage, firebaseDb } from '../../utils/firebase';

import AdminModal from '../../components/AdminModal';

class Admin extends React.Component {
	constructor(props) {
    	super(props)
	    let formValue = createValue({
	      	value: props.value,
	      	onChange: this.onChangeForm.bind(this)
	    });
	    const firstCat = this.props.categoryList[0].name;
    	this.state = {
    		formValue,
    		titleError: false,
    		descriptionError: false,
    		createCat: {
    			open: false,
    			input: '',
    		},
    		category: firstCat,
    		imageUpload: {
    			progress: 0,
    			running: false,
    			url: false,
    			error: false,
    		},
    		docUpload: {
    			progress: 0,
    			running: false,
    			url: false,
    			error: false,
    		},
    	}
  	}

  	onChangeForm(formValue) {
    	this.setState({formValue})
  	}

  	handleImgUpload = (file) => {
  		const uploadTask = firebaseStorage.child(`document-covers/${file[0].name}`).put(file[0]);
	    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
	        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	        console.log('Upload is ' + progress + '% done');
	        switch (snapshot.state) {
	          	case firebase.storage.TaskState.PAUSED: // or 'paused'
	            	console.log('Upload is paused');
	            	this.setState({
	            		imageUpload: {
			        		progress: progress,
			        		running: false,
			        		url: false,
			        		error: 'pause',
			        	},
			        });
	            	break;
	          	case firebase.storage.TaskState.RUNNING: // or 'running'
	            	console.log('Upload is running');
	            	this.setState({
	            		imageUpload: {
			        		progress: progress,
			        		running: true,
			        		url: false,
			        		error: false,
			        	},
			        });
	            	break;
	           	default:
	           		break;
	        }
	      }, (error) => {
	      switch (error.code) {
	        case 'storage/unauthorized':
	          	// User doesn't have permission to access the object
	          	this.setState({
            		imageUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'auth',
		        	},
		        });
	          	break;
	        case 'storage/canceled':
		        // User canceled the upload
		        this.setState({
            		imageUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'cancel',
		        	},
		        });
	        	break;
	        case 'storage/unknown':
	        	// Unknown error occurred, inspect error.serverResponse
	        	this.setState({
            		imageUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'unkown',
		        	},
		        });
	          	break;
	        default:
	        	break;
	      }
	    }, () => {
	      // Upload completed successfully, now we can get the download URL
	      const downloadURL = uploadTask.snapshot.downloadURL;
	      this.setState({
        		imageUpload: {
	        		progress: 100,
	        		running: false,
	        		url: downloadURL,
	        		error: false,
	        	},
	        });
	    });
  		
  	}

  	handleDocUpload = (file) => {
  		const uploadTask = firebaseStorage.child(`documents/${file[0].name}`).put(file[0]);
	    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
	        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
	        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
	        console.log('Upload is ' + progress + '% done');
	        switch (snapshot.state) {
	          	case firebase.storage.TaskState.PAUSED: // or 'paused'
	            	console.log('Upload is paused');
	            	this.setState({
	            		docUpload: {
			        		progress: progress,
			        		running: false,
			        		url: false,
			        		error: 'pause',
			        	},
			        });
	            	break;
	          	case firebase.storage.TaskState.RUNNING: // or 'running'
	            	console.log('Upload is running');
	            	this.setState({
	            		docUpload: {
			        		progress: progress,
			        		running: true,
			        		url: false,
			        		error: false,
			        	},
			        });
	            	break;
	           	default:
	           		break;
	        }
	      }, (error) => {
	      switch (error.code) {
	        case 'storage/unauthorized':
	          	// User doesn't have permission to access the object
	          	this.setState({
            		docUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'auth',
		        	},
		        });
	          	break;
	        case 'storage/canceled':
		        // User canceled the upload
		        this.setState({
            		docUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'cancel',
		        	},
		        });
	        	break;
	        case 'storage/unknown':
	        	// Unknown error occurred, inspect error.serverResponse
	        	this.setState({
            		docUpload: {
		        		progress: 0,
		        		running: false,
		        		url: false,
		        		error: 'unkown',
		        	},
		        });
	          	break;
	        default:
	        	break;
	      }
	    }, () => {
	      // Upload completed successfully, now we can get the download URL
	      const downloadURL = uploadTask.snapshot.downloadURL;
	      this.setState({
        		docUpload: {
	        		progress: 100,
	        		running: false,
	        		url: downloadURL,
	        		error: false,
	        	},
	        });
	    });
  		
  	}

  	handleToggleCat = () => {
  		this.setState({
  			createCat: {
  				open: true,
  				input: '',
  			}
  		});
  	}

  	handleCreateCatInput = (e) => {
  		this.setState({
  			createCat: {
  				open: true,
  				input: e.target.value,
  			}
  		});
  	}

  	handleCatChange = (e) => {
  		console.log('e:', e);
  		this.setState({
  			category: e.target.value,
  		})
  	}

  	handleCreateCatSubmit = (e) => {
  		e.preventDefault();
  		firebaseDb.ref().child('categories').push(this.state.createCat.input).then((res) => {
  			console.log('res:', res);
  		}).catch((err) => {
  			console.log('err:', err);
  		})
  		this.setState({
  			createCat: {
  				open: false,
  				input: '',
  			}
  		});
  	}

  	onSubmit = (e) => {
  		e.preventDefault();
  		const { formValue, imageUpload, docUpload, category } = this.state;
  		const { title, description } = formValue.value;
  		const newItem = {
  			title,
  			description,
  			coverImg: imageUpload.url,
  			documentUrl: docUpload.url,
  			category
  		}
  		firebaseDb.ref().child('documents').push(newItem).then((res) => {
  			console.log('res:', res);
  			this.props.closeModal();
  		}).catch((err) => {
  			console.log('err:', err);
  		})
  	}

	render() {
		return (
		    <AdminModal
		    	onSubmit={this.onSubmit}
		    	handleToggleCat={this.handleToggleCat}
		    	handleCreateCatSubmit={this.handleCreateCatSubmit}
		    	handleCreateCatInput={this.handleCreateCatInput}
		    	handleCatChange={this.handleCatChange}
		    	handleImgUpload={this.handleImgUpload}
		    	handleDocUpload={this.handleDocUpload}
		    	{...this.state}
		    	{...this.props}
		    />
		);
	}
}

Admin.defaultProps = {
};

Admin.propTypes = {
};

export default Admin;
