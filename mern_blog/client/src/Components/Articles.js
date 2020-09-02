import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import spinner from '../Spinner-1s-200px.gif';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const Articles = ({ posts, deleteArticle }) => {
  const [post, setPost] = React.useState([]);

  const deleteHandler = (id) => {
    let hasToken = localStorage.getItem('auth');
    if (hasToken) {
      axios.delete(`http://localhost:8080/articles/${id}`).then((res) => {
        alert(res.data);
        deleteArticle(id); //we cannot define the delete handler function here as the data is derived in app component
      });
    } else {
      toast.error('Youre not authorized ');
    }
  };
  let hasToken = localStorage.getItem('auth');

  if (hasToken) {
    return (
      <div className='container-fluid mt-4'>
        {!posts.length ? (
          <div className='row'>
            <div className='col-12 text-center'>
              <img src={spinner} className='' alt='loading' />
            </div>
          </div>
        ) : (
          posts.map((post, key) => (
            <div className='container mt-3' key={key}>
              <h6 className=''>
                {' '}
                <Link to={{ pathname: `/articles/${post._id}` }}>
                  {post.title}
                </Link>{' '}
              </h6>
              <p className=' lead'>{post.article}</p>
              <span className='badge badge-primary  p-2'>
                Posted by {post.authorname} {new Date().getUTCFullYear()}
              </span>
              <div className='row'>
                <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
                  <Link
                    to={`edit/update/${post._id}`}
                    className='btn btn-outline-success'
                  >
                    Edit Article
                  </Link>
                </div>
                <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteHandler(post._id)}
                  >
                    Delete article
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))
        )}
      </div>
    );
  } else {
    return (
      <div className='container-fluid mt-4'>
        {!posts.length ? (
          <div className='row'>
            <div className='col-12 text-center'>
              <img src={spinner} className='' alt='loading' />
            </div>
          </div>
        ) : (
          posts.map((post, key) => (
            <div className='container mt-3' key={key}>
              <h6 className=''>
                {' '}
                <Link to={{ pathname: `/articles/${post._id}` }}>
                  {post.title}
                </Link>{' '}
              </h6>
              <p className=' lead'>{post.article}</p>
              <span className='badge badge-primary  p-2'>
                Posted by {post.authorname} {new Date().getUTCFullYear()}
              </span>
              <hr />
            </div>
          ))
        )}
      </div>
    );
  }
};

// export class Articles extends Component {
//
//   deleteArticle = (id) => {
//     axios.delete(`articles/${id}`).then((res) => console.log(res.data));
//     this.setState({
//       posts: this.props.posts.filter((post) => post._id !== id),
//     });
//   };

//   render() {
//     return (
//       <div className='container-fluid mt-4'>
//         {!this.props.posts.length ? (
//           <div className='row'>
//             <div className='col-12 text-center'>
//               <img src={spinner} className='' alt='loading' />
//             </div>
//           </div>
//         ) : (
//           this.props.posts.map((post, key) => (
//             <div className='container mt-3' key={key}>
//               <h6 className=''>
//                 {' '}
//                 <Link to={{ pathname: `/article/${post._id}` }}>
//                   {post.title}
//                 </Link>{' '}
//               </h6>
//               <p className=' lead'>{post.article}</p>
//               <span className='badge badge-primary  p-2'>
//                 Posted by {post.authorname} {new Date().getUTCFullYear()}
//               </span>
//               <div className='row'>
//                 <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
//                   <Link
//                     to={{ pathname: `/edit/update/${post._id}` }}
//                     className='btn btn-outline-success'
//                   >
//                     Edit Article
//                   </Link>
//                 </div>
//                 <div className='col-sm-6 col-lg-4 col-xl-2 col-md-4 mt-3'>
//                   <button
//                     onClick={() => this.deleteArticle(post._id)}
//                     className='btn btn-outline-danger'
//                   >
//                     Delete Article
//                   </button>
//                 </div>
//               </div>
//               <hr />
//             </div>
//           ))
//         )}
//       </div>
//     );
//   }
// }

export default withRouter(Articles);
