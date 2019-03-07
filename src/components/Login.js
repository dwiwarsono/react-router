import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: '',
      txtPassword: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    })
  }

  onLogin = (e) => {
    e.preventDefault();
    const { txtUsername, txtPassword } = this.state;
    console.log(this.state.txtUsername);
    console.log(this.state.txtPassword);
    if (txtUsername === 'admin' && txtPassword === 'admin') {
      localStorage.setItem('user', JSON.stringify({ // SIMPAN KE DALAM LOCALSTORAGE DENGAN Key USER DAN Value nya Username dan Password
        username: txtUsername,
        password: txtPassword
      }))
    }
  }

  render() {
    const { txtUsername, txtPassword } = this.state;
    const loggedInUser = localStorage.getItem('user'); // AMBIL PADA LOCALSTORAGE Key User

    if (loggedInUser !== null) {
      const { location } = this.props;
      console.log(location);
      return <Redirect to={{
        pathname: '/products',
        state: {
          from: location
        }
      }}
      />
    }



    return (
      <div className="row">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

          <form onSubmit={this.onLogin}>
            <legend>Login</legend>

            <div className="form-group">
              <label>Username :</label>
              <input
                type="text"
                className="form-control"
                name="txtUsername"
                value={txtUsername}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input
                type="password"
                className="form-control"
                name="txtPassword"
                value={txtPassword}
                onChange={this.onChange}
              />
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>
      </div>

    );
  }
}

export default Login;
