import "../styles/myprofile.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/myOrders")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: data from server", data);
        setData(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting" + id);
    fetch("http://localhost:3000/myOrders/" + id, {
      method: "DELETE",
    });
    history.push("/userProfileInformation");
    /*setData(data.filter((item) => item.id !== id)); */
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "user",
      headerName: "Name of Product",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 80,
    },
    {
      field: "adress",
      headerName: "Address",
      width: 180,
    },
    {
      field: "seller",
      headerName: "Seller",
      width: 100,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/reviewform"}>
              <button className="userListEdit">Post Review</button>
            </Link>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="container">
      <Sidebar />
      <div className="myOrders">
        <div className="userTitleContainer">
          <h1 className="userTitle">My Orders</h1>
          <Link to="/products">
            <button className="userAddButton">Continue Shopping</button>
          </Link>
        </div>
        <DataGrid
          GridLines="None"
          rowHeight={80}
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            boxShadow: 20,
            borderBottom: "none",
            borderRadius: 7,
          }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
