import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPass: '',
      error: '',
    };
  }

  toastHandle = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('http://localhost:8080/users/register', user)
      .then((res) => {
        toast.success('User registered successfully !', {
          position: toast.POSITION.TOP_RIGHT,
        });
        this.props.history.push('/login');
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChange2 = (e) => {
    this.setState({ email: e.target.value });
  };
  handleChange3 = (e) => {
    this.setState({ password: e.target.value });
  };
  handleChange4 = (e) => {
    this.setState({ confirmPass: e.target.value });
  };
  render() {
    return (
      <Container>
        <form className='mt-5'>
          <div className='row text-center'>
            <div className='col-12'>
              <h1 className='display-6'>R E G I S T E R</h1>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.name}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
              type='email'
              value={this.state.email}
              className='form-control'
              onChange={(e) => {
                this.handleChange2(e);
              }}
            />
            <small className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='pass'>Password</label>
            <input
              type='password'
              className='form-control'
              value={this.state.password}
              onChange={(e) => {
                this.handleChange3(e);
              }}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='conpass'>Confirm Password</label>
            <input
              type='password'
              className='form-control'
              value={this.state.confirmPass}
              onChange={(e) => {
                this.handleChange4(e);
              }}
            />
          </div>
          <button
            onClick={(e) => this.toastHandle(e)}
            className='btn btn-primary mr-5'
          >
            Register
          </button>
          <button className='btn btn-primary'>
            <Link to='/login' className='text-white'>
              Login
            </Link>
          </button>
          <div className='lead'>{this.state.error}</div>
        </form>
      </Container>
    );
  }
}

export default Register;
