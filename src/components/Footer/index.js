/**
*
* Footer
*
*/

import React from 'react';


import styles from './styles.css';

function Footer({ logout, userData }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>© 2016 TOMEPOSSE.COM - TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR CONTEMPLECOM </span>
        <br />
        {userData && <span className={styles.logout} onClick={logout}>Logout</span>}
      </div>
    </div>
  );
}

Footer.propTypes = {
  logout: React.PropTypes.func,
  userData: React.PropTypes.object,
};

export default Footer;
