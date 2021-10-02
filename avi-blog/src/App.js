

import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Articles from './pages/Articles';
import NewArticles from './pages/NewArticles';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <NewArticles />
            </Route>
            <Route path="/blog">
              <Articles />
            </Route>
             <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;