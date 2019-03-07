import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import routes from './routes';




class App extends Component {


  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Menu />

          <Switch> {/* TAMBAHKAN SWITCH UNTUK NotFound */}
            {this.showContentMenus(routes)}
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
