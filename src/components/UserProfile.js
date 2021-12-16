import "../styles/myprofile.css";
import Sidebar from "./Sidebar";

const UserProfile = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="others">Render the orders Component </div>
    </div>
  );
};

export default UserProfile;
