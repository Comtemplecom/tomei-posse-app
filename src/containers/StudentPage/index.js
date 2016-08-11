/*
 *
 * StudentPage
 *
 */

import React from 'react';
import { withRouter } from 'react-router';
import mapValues from 'lodash/mapValues';

import Firebase, { firebaseDb } from '../../utils/firebase';
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
      current: 'Todos',
      adminModal: false,
      categories: [],
      documents: [],
    }
  }

  componentDidMount () {
    // Fetch categories
    const categoryListRef = firebaseDb.ref('categories');
    let catList = [];
    categoryListRef.on('value', (data) => {
      mapValues(data.val(), (item) => {
        catList.push(item);
      });
      console.log('catList:', catList);
      this.setState({
        categories: catList
      });
    });

    // Fetch documents
    const documentsRef = firebaseDb.ref('documents');
    let docList = [];
    documentsRef.on('value', (data) => {
      mapValues(data.val(), (item) => {
        docList.push(item);
      });
      this.setState({
        documents: docList
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
    const { current, categories } = this.state;
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <CategoryBar
            change={this.handleCategoryChange}
            current={current}
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
