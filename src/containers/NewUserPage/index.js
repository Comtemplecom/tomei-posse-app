import React from 'react';
import Firebase from '../../utils/firebase';
import Input from '../../components/Input';

class NewUserPage extends React.Component {
  render() {
    console.log(this.props);
    console.log(Firebase.registerUser);
    return (
      <div>
        <Input
          title="Username"
          type="text"
          value={passwordInput}
          onChange={handlePassword}
        />
      </div>
    );
  }
}

export default NewUserPage;
