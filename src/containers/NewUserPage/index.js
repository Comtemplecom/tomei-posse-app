import React from 'react';
import Firebase from '../../utils/firebase';
import UserForm from '../../components/UserForm';
import ReturnNavbar from '../../components/ReturnNavbar';
import Footer from '../../components/Footer';

class NewUserPage extends React.Component {
  state = {
    userName: '',
  }

  handleFormUpdate(e, name) {

  }

  render() {
    console.log(this.props);
    console.log(Firebase.registerUser);
    return (
      <div>
        <ReturnNavbar to="/area-restrita" />
        <UserForm
          onChange={this.handleFormUpdate}
          {...this.state}
        />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default NewUserPage;
