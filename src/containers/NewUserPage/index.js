import React from 'react';
import Firebase from '../../utils/firebase';
import UserForm from '../../components/UserForm';
import ReturnNavbar from '../../components/ReturnNavbar';
import Footer from '../../components/Footer';

class NewUserPage extends React.Component {
  state = {
      email: '',
      password: '',
      password2: '',
      error: '',
  }

  handleFormUpdate = (e) => {
    const { value, name } = e.target;
    this.setState({ [name] : value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, password2 } = this.state;
    if (password.length < 6) {
      this.setState({ error: 'passwordShort'})
    } else if (password !== password2) {
      this.setState({ error: 'passwordMismatch'});
    } else {
      this.setState({ error: ''});
      Firebase.registerUser(email, password)
      .then((res) => console.log(res))
      .catch((err) => console.log('ERROR! ', err));
    }
  }

  render() {
    return (
      <div>
        <ReturnNavbar to="/area-restrita" />
        <UserForm
          onChange={this.handleFormUpdate}
          submit={this.handleSubmit}
          {...this.state}
        />
        <Footer {...this.props} />
      </div>
    );
  }
}

export default NewUserPage;
