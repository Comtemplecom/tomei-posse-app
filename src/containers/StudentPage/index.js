/*
 *
 * StudentPage
 *
 */

import React from 'react';
import { withRouter } from 'react-router';

import Firebase from '../../utils/firebase';
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
    }
  }

  componentDidMount () {
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
    const { current } = this.state;
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <CategoryBar
            change={this.handleCategoryChange}
            current={current}
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
