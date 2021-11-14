import "../App.css";
import Navbar from "./Navbar";
import { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./Home";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onChange = () => {
    this.setState({});
  };
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar change={this.onChange} />
          <Switch>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/wishlist">
              <h1>Wishlist</h1>
            </Route>
            <Route path="/cart">
              <h1>cart</h1>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
