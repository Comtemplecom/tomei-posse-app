/*
 *
 * StudentPage
 *
 */

import React from 'react';

import Header from '../../components/MainHeader';
import CategoryBar from '../../components/CategoryBar';
import DocumentList from '../../components/DocumentList';
import Footer from '../../components/Footer';

import styles from './styles.css';

export class StudentPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header />
        <main className={styles.main}>
          <CategoryBar />
          <DocumentList />
        </main>
        <Footer />
      </div>
    );
  }
}

export default StudentPage;
