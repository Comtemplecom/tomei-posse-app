/*
 *
 * LoginPage
 *
 */

import React from 'react';

import LoginHeader from '../../components/LoginHeader';
import LoginForm from '../../components/LoginForm';
import Footer from '../../components/Footer';
import Firebase from '../../utils/firebase';

class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      userInput: 'Nome do usuário',
      passwordInput: '123456',
    };
  }

  handleUser = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  }

  handlePassword = (e) => {
    this.setState({
      passwordInput: e.target.value,
    });
  }

  handleSubmit = (e) => {
    const { userInput, passwordInput } = this.state;
    e.preventDefault();
    Firebase.loginUser(userInput, passwordInput)
    .then((res) => {
        if(res.errorCode) {
          this.setState({
            error: res.errorMessage
          });
        } else {
          this.props.history.push('/area-restrita');
        }
    }).catch((err) => {
      this.setState({
        error: err
      });
    });
  }

  render() {
    return (
      <div>
        <LoginHeader />
        <LoginForm
          handleUser={this.handleUser}
          handlePassword={this.handlePassword}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />
        <Footer />
      </div>
    );
  }
}

export default LoginPage;
