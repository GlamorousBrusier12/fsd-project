import "../styles/NewCard.css";
import Sidebar from "./Sidebar";

const NewCard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="newCard">
        <h1 className="newUserTitle">New Card</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Card Type</label>
            <input type="text" placeholder="Axis Bank" />
          </div>
          <div className="newUserItem">
            <label>Name on the Card</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newUserItem">
            <label>Expiry Date</label>
            <input type="text" placeholder="10/2022" />
          </div>

          <div className="newUserItem">
            <label>CVV</label>
            <input type="text" placeholder="498 " />
          </div>
          <div className="newUserItem">
            <label>Card Number</label>
            <input type="text" placeholder="1234****789" />
          </div>
          <div className="newUserItem">
            <label>Active</label>
            <select className="newUserSelect" name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <button className="newUserButton">Create</button>
        </form>
      </div>
    </div>
  );
};

export default NewCard;
