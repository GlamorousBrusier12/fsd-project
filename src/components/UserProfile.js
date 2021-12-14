import "../styles/myprofile.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import Adresslist from "./Adresslist";

const UserProfile = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/userProfile">
            <div className="others">Render the orders Component </div>
          </Route>

          {/* <Route path="/userProfileInformation">
            <div className="others">Render Profile info such as name etc</div>
          </Route>

          <Route exact path="/userProfileAdress">
              <Adresslist />
            </Route>
          
          <Route path="/userProfilePanCard">
            <div className="others">Render different added pancards.</div>
          </Route>
          <Route path="/userProfileDebitCard">
            <div className="others">Render different added debitcards.</div>
          </Route>
          <Route path="/userProfileUPI">
            <div className="others">Render different added UPI accounts.</div>
          </Route>
          <Route path="/userProfilelogout">
            <div className="others">Log the user out.</div>
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default UserProfile;
