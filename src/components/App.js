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
import AdressList from "./AdressList";
import UserProfileInformation from "./UserProfileInformation";
import UserProfilePanCard from "./UserProfilePanCard";
import UserProfileDebitCard from "./UserProfileDebitCard";
import UserProfileUPI from "./UserProfileUPI";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super();
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
          <div className="content-container">
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
                <AdressList />
              </Route>
              <Route exact path="/userProfileInformation">
                <UserProfileInformation />
              </Route>
              <Route exact path="/userProfilePanCard">
                <UserProfilePanCard />
              </Route>
              <Route exact path="/userProfileDebitCard">
                <UserProfileDebitCard />
              </Route>
              <Route exact path="/userProfileUPI">
                <UserProfileUPI />
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
          <Footer change={this.onChange} />
        </div>
      </Router>
    );
  }
}

export default App;
