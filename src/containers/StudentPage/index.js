/*
 *
 * StudentPage
 *
 */

import React from 'react';
import { withRouter } from 'react-router';

import Firebase, { firebaseDb } from '../../utils/firebase';
import { parseFirebaseObject, parseSimpleFirebaseObject } from '../../utils/misc';
import { ADMIN_UID } from '../../../config';
import { currentUser } from '../../utils/localstorage';

import Header from '../../components/MainHeader';
import CategoryBar from '../../components/CategoryBar';
import DocumentList from '../../components/DocumentList';
import Footer from '../../components/Footer';

import styles from './styles.css';

export class StudentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
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

    // Check is user is admin
    if(currentUser().uid === ADMIN_UID) {
      this.setState({
        admin: true,
      });
    }
  }

  handleCategoryChange = (category) => {
    this.setState({
      currentCategory: category
    })
  }

  handleLogout = () => {
    Firebase.logoutUser().then((res) => {
      if(res.success) {
          this.props.router.push('/');
      }
    }).catch((err) => {
      console.log(err);
    });
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
          />
        </main>
        <Footer
          logout={this.handleLogout}
          user={currentUser()}
        />
      </div>
    );
  }
}

export default withRouter(StudentPage);
