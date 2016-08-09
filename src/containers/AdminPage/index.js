/*
 *
 * AdminPage
 *
 */

import React from 'react';
import Firebase from '../../utils/firebase';

class AdminPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default AdminPage;
