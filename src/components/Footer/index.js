/**
*
* Footer
*
*/

import React from 'react';


import styles from './styles.css';

function Footer({ logout, user }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span>© 2016 TOMEPOSSE.COM - TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR CONTEMPLECOM </span>
        <br />
        {user && <span className={styles.logout} onClick={logout}>Logout</span>}
      </div>
    </div>
  );
}

Footer.propTypes = {
  logout: React.PropTypes.func,
  user: React.PropTypes.object,
};

export default Footer;
