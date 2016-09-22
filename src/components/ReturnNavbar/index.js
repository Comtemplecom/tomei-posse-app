/**
*
* ReturnNavbar
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';

function ReturnNavbar({ to }) {
  return (
    <div className={styles.wrapper}>
      <Link to={to}>
        <span>Voltar</span>
      </Link>
    </div>
  );
}

ReturnNavbar.defaultProps = {
  to: '/',
};

ReturnNavbar.propTypes = {
  to: React.PropTypes.string,
};

export default ReturnNavbar;
