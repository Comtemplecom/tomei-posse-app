/*
 *
 * StudentPage
 *
 */

import React from 'react';

import { firebaseDb } from '../../utils/firebase';
import { parseFirebaseObject, parseSimpleFirebaseObject } from '../../utils/misc';

import Header from '../../components/MainHeader';
import CategoryBar from '../../components/CategoryBar';
import DocumentList from '../../components/DocumentList';
import Footer from '../../components/Footer';

import styles from './styles.css';

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
    const { currentCategory, categories } = this.state;
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <CategoryBar
            change={this.handleCategoryChange}
            current={currentCategory}
            categories={categories}
          />
          <DocumentList
            openModal={this.openModal}
            closeModal={this.closeModal}
            {...this.state}
            admin={admin}
          />
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
