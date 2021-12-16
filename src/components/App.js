import "../styles/App.css";
import Navbar from "./Navbar";
import Login from "./Login";
import Register from "./Register";
import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./Home";
import Products from "./Products";
import ProductPage from "./ProductPage";
import ReviewForm from "./ReviewForm";
import UserProfile from "./UserProfile";
import Adresslist from "./Adresslist";
import Cart from './Cart';

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
            <Route path="/reviewform">
              <ReviewForm />
            </Route>
            <Route path="/productpage">
              <ProductPage />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/userProfile">
              <UserProfile />
            </Route>
            <Route exact path="/userProfileAdress">
              <Adresslist />
            </Route>
            <Route path="/wishlist">
              <h1>Wishlist</h1>
            </Route>
            <Route path="/cart">
              <Cart/>
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
