import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      article: '',
      authorname: '',
      message: '',
      done: false,
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id; // we grab the ID from the URL

    axios.get(`http://localhost:8080/articles/${id}`).then((res) =>
      this.setState({
        title: res.data.title,
        authorname: res.data.authorname,
        article: res.data.article,
      })
    );
  }

  updateHandler = (e) => {
    e.preventDefault();

    let hasToken = localStorage.getItem('auth');
    if (hasToken) {
      const id = this.props.match.params.id;
      const articles = {
        title: this.state.title,
        article: this.state.article,
        authorname: this.state.authorname,
      };
      axios
        .put(`http://localhost:8080/articles/update/${id}`, articles)
        .then((res) => this.setState({ message: res.data, done: true }))
        .catch((err) => console.log(err));
      this.setState({
        title: '',
        article: '',
        authorname: '',
        message: '',
        done: false,
      });
    } else {
      toast.error('Youre not authorized please login');
    }
  };
  render() {
    return (
      <form className='mt-3 container' onSubmit={this.updateHandler}>
        <div className='form-group'>
          <h6 className='display-4'>Edit article</h6>
          <div>
            <p className='text-danger message'>{this.state.message}</p>
          </div>
          <label htmlFor='authorname'>Author Name</label>
          <input
            type='text'
            value={this.state.authorname}
            onChange={(e) => {
              this.setState({ authorname: e.target.value });
            }}
            className='form-control'
            placeholder='Author name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
            className='form-control'
            placeholder='Enter title'
          />
        </div>
        <div className='form-group'>
          <textarea
            onChange={(e) => {
              this.setState({ article: e.target.value });
            }}
            className='form-control'
            value={this.state.article}
            rows='3'
          ></textarea>
        </div>
        <button type='submit' className='btn btn-primary'>
          Update Article
        </button>{' '}
        <div className='row'>
          <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
            <Link to='/' className='btn btn-outline-success'>
              Back to homepage
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default EditArticle;
