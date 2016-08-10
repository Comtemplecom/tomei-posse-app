/*
 *
 * StudentPage
 *
 */

import React from 'react';
import Firebase from '../../utils/firebase';
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
      currentCategory: 'Todos',
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
          this.props.history.push('/');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    const { currentCategory } = this.state;
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <CategoryBar
            change={this.handleCategoryChange}
            current={currentCategory}
          />
          <DocumentList
            current={currentCategory}
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

export default StudentPage;
