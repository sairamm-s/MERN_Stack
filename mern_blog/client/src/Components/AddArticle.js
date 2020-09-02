import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// class AddArticle extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: '',
//       article: '',
//       authorname: '',
//     };
//   }

//   submitHandler = (e) => {
//     const articles = {
//       title: this.state.title,
//       article: this.state.article,
//       authorname: this.state.authorname,
//     };
//     axios
//       .post('http://localhost:8080/articles/add', articles)
//       .then((res) => console.log(res.data))
//       .catch((err) => console.log(err));
//     this.setState({
//       title: '',
//       article: '',
//       authorname: '',
//     });
//   };

//   render() {
//     return (
//       <form
//         className='mt-3 container'
//         onSubmit={this.submitHandler}
//         encType='multipart/form-data'
//       >
//         <div className='form-group'>
//           <h6 className='display-4'>Add an article</h6>
//           <label htmlFor='authorname'>Author Name</label>
//           <input
//             type='text'
//             value={this.state.authorname}
//             onChange={(e) => {
//               this.setState({ authorname: e.target.value });
//             }}
//             className='form-control'
//             placeholder='Author name'
//           />
//         </div>
//         <div className='form-group'>
//           <label htmlFor='title'>Title</label>
//           <input
//             type='text'
//             value={this.state.title}
//             onChange={(e) => {
//               this.setState({ title: e.target.value });
//             }}
//             className='form-control'
//             placeholder='Enter title'
//           />
//         </div>
//         <div className='form-group'>
//           <textarea
//             onChange={(e) => {
//               this.setState({ article: e.target.value });
//             }}
//             className='form-control'
//             value={this.state.article}
//             rows='3'
//           ></textarea>
//         </div>
//         <button type='submit' className='btn btn-primary'>
//           Post Article
//         </button>
//         <div className='row'>
//           <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
//             <Link to='/' className='btn btn-outline-success'>
//               Back to homepage
//             </Link>
//           </div>
//         </div>
//       </form>
//     );
//   }
// }

// export default AddArticle;

export const AddArticle = () => {
  const [title, setTitle] = React.useState('');
  const [authorname, setAuthorname] = React.useState('');
  const [article, setArticle] = React.useState('');
  const submitHandler = (e) => {
    e.preventDefault();

    const articles = {
      title,
      authorname,
      article,
    };
    axios
      .post('http://localhost:8080/articles/add', articles)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setTitle('');
    setAuthorname('');
    setArticle('');
  };
  return (
    <form
      className='mt-3 container'
      onSubmit={submitHandler}
      encType='multipart/form-data'
    >
      <div className='form-group'>
        <h6 className='display-4'>Add an article</h6>
        <label htmlFor='authorname'>Author Name</label>
        <input
          type='text'
          value={authorname}
          onChange={(e) => {
            setAuthorname(e.target.value);
          }}
          className='form-control'
          placeholder='Author name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className='form-control'
          placeholder='Enter title'
        />
      </div>
      <div className='form-group'>
        <textarea
          onChange={(e) => {
            setArticle(e.target.value);
          }}
          className='form-control'
          value={article}
          rows='3'
        ></textarea>
      </div>
      <button type='submit' className='btn btn-primary'>
        Post Article
      </button>
      <div className='row'>
        <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
          <Link to='/' className='btn btn-outline-success'>
            Back to homepage
          </Link>
        </div>
      </div>
    </form>
  );
};
