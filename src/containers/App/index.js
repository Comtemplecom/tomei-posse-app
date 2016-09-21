/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { withRouter } from 'react-router';
import Firebase from '../../utils/firebase';
import { ADMIN_UID } from '../../../config';
import { currentUser } from '../../utils/localstorage';

import styles from './styles.css';
import './evil-icons.css';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };
  constructor(props) {
    super(props);
    this.state = {
      admin: false,
      userData: currentUser(),
    }
  }

  componentDidMount () {
    // Check is user is admin
    const { userData } = this.state;
    if(userData.uid === ADMIN_UID) {
      this.setState({
        admin: true,
      });
    }
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

  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     child => React.cloneElement(child, { logout: this.handleLogout, ...this.state })
    );
    return (
      <div className={styles.container}>
        {childrenWithProps}
      </div>
    );
  }
}

export default withRouter(App);
