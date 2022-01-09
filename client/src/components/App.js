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
import UserProfileInformation from "./UserProfileInformation";
import UserProfilePanCard from "./UserProfilePanCard";
import UserProfileDebitCard from "./UserProfileDebitCard";
import UserProfileUPI from "./UserProfileUPI";
import Footer from "./Footer";
import AdressList from "./AdressList";
import Cart from "./Cart";
import NewAdress from "./NewAdress";
import NewCard from "./NewCard";
import NewUPI from "./NewUPI";
import Payment from "./Payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
          <ToastContainer autoClose={5000} />
          <Navbar change={this.onChange} />
          <div className="content-container">
            <Switch>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/reviewform">
                <ReviewForm />
              </Route>
              <Route path="/products/:productId">
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
              <Route path="/userProfileInformation">
                <UserProfileInformation />
              </Route>
              <Route exact path="/userProfilePanCard">
                <UserProfilePanCard />
              </Route>
              <Route exact path="/userProfileDebitCard">
                <UserProfileDebitCard />
              </Route>
              <Route exact path="/newAdress">
                <NewAdress />
              </Route>
              <Route exact path="/newCard">
                <NewCard />
              </Route>
              <Route exact path="/newUPI">
                <NewUPI />
              </Route>
              <Route exact path="/userProfileUPI">
                <UserProfileUPI />
              </Route>
              <Route path="/wishlist">
                <h1>Wishlist</h1>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

/* this is a comment */
