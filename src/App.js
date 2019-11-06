import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import HomeView from './views/HomeView';
import PetLibraryUrqlView from './views/PetLibraryUrqlView';
import VanillaJSView from './views/VanillaJSView';
import SgpView from './views/SgpView';
import SgpUrqlView from './views/SgpUrqlView';
import TodoListView from './views/TodoListView';
import ApolloView from './views/ApolloView';
import ProfileView from './views/ProfileView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/profile" component={ProfileView} />
        <Route exact path="/petlibrary-urql" component={PetLibraryUrqlView} />
        <Route exact path="/sgp-apollo" component={ApolloView} />
        <Route exact path="/sgp" component={SgpView} />
        <Route exact path="/sgp-urql" component={SgpUrqlView} />
        <Route exact path="/todolist" component={TodoListView} />
        <Route exact path="/vanillajs" component={VanillaJSView} />
      </Switch>
    </Router>
  );
}

export default App;
