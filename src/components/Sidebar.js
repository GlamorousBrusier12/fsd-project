import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h1 className="sidebarTitleHello">My Account Details</h1>
          <h1 className="sidebarTitle">Orders</h1>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/present.png`}
              />
              My Orders
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Account Settings</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/man.png`}
              />
              Profile Information
            </li>
            <div>
              <li className="sidebarListItem">
                <img
                  className="sidebarIcon"
                  style={{ height: 30, width: 30 }}
                  src={process.env.PUBLIC_URL + `/images/location.png`}
                />
                Manage Adresses
              </li>
            </div>
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/credit-card.png`}
              />
              Pan card Information
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Payment Information</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/debit-card.png`}
              />
              Saved Cards
            </li>
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/mobile-payment.png`}
              />
              Saved UPI
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Logout</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img
                className="sidebarIcon"
                style={{ height: 30, width: 30 }}
                src={process.env.PUBLIC_URL + `/images/logout.png`}
              />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
