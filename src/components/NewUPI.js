import "../styles/NewUPI.css";
import Sidebar from "./Sidebar";

const NewUPI = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="newUPI">
        <h1 className="newUserTitle">New UPI</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>UPI Type</label>
            <input type="text" placeholder="PayTm" />
          </div>
          <div className="newUserItem">
            <label>Name on the UPI</label>
            <input type="text" placeholder="John Smith" />
          </div>
          <div className="newUserItem">
            <label>UPI ID</label>
            <input type="text" placeholder="georgey75@paytm" />
          </div>

          <div className="newUserItem">
            <label>Bank linked</label>
            <input type="text" placeholder="HDFC" />
          </div>
          <div className="newUserItem">
            <label>Phone Number</label>
            <input type="text" placeholder="12344789" />
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

export default NewUPI;
