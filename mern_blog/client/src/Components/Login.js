import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  passHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  loginHandle = (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('http://localhost:8080/users/login', user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('auth', JSON.stringify(res.data));
        this.props.history.push('/articles');
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  render() {
    return (
      <div>
        <Container>
          <form onSubmit={this.loginHandle} className='mt-5'>
            <div className='row text-center'>
              <div className='col-12'>
                <h1 className='display-6'>L O G I N</h1>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Email address</label>
              <input
                type='email'
                value={this.state.email}
                onChange={(e) => this.emailHandler(e)}
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <small id='emailHelp' className='form-text text-muted'>
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputPassword1'>Password</label>
              <input
                type='password'
                value={this.state.password}
                onChange={(e) => this.passHandler(e)}
                className='form-control'
                id='exampleInputPassword1'
              />
            </div>
            <button type='submit' className='btn btn-primary mr-5'>
              Login{' '}
            </button>
            <button className='btn btn-primary'>
              <Link to='/register' className='text-white'>
                Register
              </Link>
            </button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;
