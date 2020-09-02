import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import Articles from '../src/Components/Articles';
import { Route, Switch, withRouter } from 'react-router-dom';
import { AddArticle } from './Components/AddArticle';
import Article from './Components/Article';
import EditArticle from './Components/EditArticle';
import Login from './Components/Login';
import Register from './Components/Register';
import { ProtectedRoute } from './Components/ProtectedRoute';

function App() {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:8080/articles')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  });

  const deleteArticle = (id) => {
    setPosts(posts.filter((article) => article._id !== id));
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path='/' component={Login} />
        <Route
          exact
          path='/articles'
          render={() => (
            <Articles posts={posts} deleteArticle={deleteArticle} />
          )}
        />
        <ProtectedRoute path='/add' component={AddArticle} />
        <Route
          path='/articles/:id'
          // render={(props) => <Article posts={posts} {...props}/>}
          component={Article}
        />
        <Route path='/edit/update/:id' component={EditArticle} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;

// class App extends Component {
//   state = {
//     posts: [],
//   };
//   componentDidMount() {
//     axios
//       .get('http://localhost:8080/articles')
//       .then((res) => {
//         this.setState({
//           posts: res.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }
//   render() {
//     return (
//       <div>
//         <Navbar />
//         <Header />
//         <Switch>
//           <Route
//             exact
//             path='/'
//             render={() => <Articles posts={this.state.posts} />}
//           />
//           <Route path='/add' component={AddArticle} />
//           <Route path='/articles/:id' component={Article} />
//           <Route path='/edit/update/:id' component={EditArticle} />
//         </Switch>
//         <Footer />{' '}
//       </div>
//     );
//   }
// }

// export default App;
