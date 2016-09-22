/*
 *
 * StudentPage
 *
 */

import React from 'react';
import Modal from 'react-modal';

import { firebaseDb } from '../../utils/firebase';
import { parseFirebaseObject, parseSimpleFirebaseObject } from '../../utils/misc';

import Header from '../../components/MainHeader';
import CategoryBar from '../../components/CategoryBar';
import DocumentList from '../../components/DocumentList';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Admin from '../Admin';

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

export class StudentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      currentCategory: 'Todos',
      adminModal: false,
      categories: [],
      documents: [],
    }
  }

  componentDidMount () {
    // Fetch categories
    const categoryListRef = firebaseDb.ref('categories');
    categoryListRef.on('value', (data) => {
      this.setState({
        categories: parseSimpleFirebaseObject(data.val())
      });
    });

    // Fetch documents
    const documentsRef = firebaseDb.ref('documents');
    documentsRef.on('value', (data) => {
      this.setState({
        documents: parseFirebaseObject(data.val())
      });
    });
  }

  handleCategoryChange = (category) => {
    this.setState({
      currentCategory: category
    })
  }

  openModal = () => {
    this.setState({
      adminModal: true
    });
  }

  closeModal = () => {
    this.setState({
      adminModal: false
    });
  }

  render() {
    const { userData, logout, admin } = this.props;
    const { currentCategory, categories, adminModal } = this.state;
    return (
      <div>
        {admin && <Navbar />}
        <Header />
        <main className={styles.main}>
          <CategoryBar
            change={this.handleCategoryChange}
            current={currentCategory}
            categories={categories}
          />
          <DocumentList
            {...this.state}
            admin={admin}
          />
          {admin &&
            <Modal
              isOpen={adminModal}
              onRequestClose={this.closeModal}
              style={modalStyle}
            >
              <Admin closeModal={this.closeModal} categoryList={categories} />
            </Modal>}
        </main>
        <Footer
          logout={logout}
          user={userData}
        />
      </div>
    );
  }
}

export default StudentPage;
