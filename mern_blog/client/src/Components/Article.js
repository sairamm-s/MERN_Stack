import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// class Article extends Component {
//   state = {
//     title: '',
//     authorname: '',
//     article: '',
//   };
//   componentDidMount() {
//     const id = this.props.match.params.id; // we grab the ID from the URL

//     axios.get(`http://localhost:8080/articles/${id}`).then((res) =>
//       this.setState({
//         title: res.data.title,
//         authorname: res.data.authorname,
//         article: res.data.article,
//       })
//     );
//   }
//   render() {
//     return (
//       <div className='container mt-3' key={this.props.match.params.title}>
//         <h3 className=''>{this.state.title}</h3>
//         <p className=' lead'>{this.state.article}</p>
//         <span className='badge badge-primary  p-2'>
//           Posted by {this.state.authorname} {new Date().getUTCFullYear()}
//         </span>
//         <div className='row'>
//           <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
//             <Link to='/' className='btn btn-outline-success'>
//               Back to homepage
//             </Link>
//           </div>
//         </div>
//         <hr />
//       </div>
//     );
//   }
// }

//using useEffect

const Article = (props) => {
  const [title, setTitle] = useState('');
  const [authorname, setAuthorname] = useState('');
  const [article, setArticle] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:8080/articles/${props.match.params.id}`)
      .then((res) => {
        setTitle(res.data.title);
        setArticle(res.data.article);
        setAuthorname(res.data.authorname);
      })
      .catch((err) => console.log(err));
  }, [props]);

  return (
    <div className='container mt-3'>
      <h3 className=''>{title}</h3>
      <p className=' lead'>{article}</p>{' '}
      <span className='badge badge-primary  p-2'>Posted by {authorname}</span>
      <div className='row'>
        {' '}
        <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
          {' '}
          <Link to='/articles' className='btn btn-outline-success'>
            Back to homepage{' '}
          </Link>{' '}
        </div>{' '}
      </div>
      <hr />{' '}
    </div>
  );
};

export default Article;
