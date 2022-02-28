import "../styles/myprofile.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link, Redirect } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { toastStyler } from "../commonEquipment";
import { handleUser } from "../actions";

//This page renders all Myorders
const UserProfile = (props) => {
  const [data, setData] = useState([]);
  //We get the user from the store.
  let newUser = props.user;
  //console.log("data from the store", data);
  //We set the existing data.
  useEffect(() => {
    setData(props.user.myOrders);
  }, [props.user.myOrders]);

  const handleDelete = (id) => {
    //We delete this particular id.
    let afterDelete = data.filter((item) => item.id !== id);

    //Set the new array
    setData(afterDelete);

    //We patch the entire user.
    newUser.myOrders = afterDelete;
    let url = "http://localhost:3000/users/" + props.user.id;

    fetch(url, {
      method: "PATCH", // or 'PUT'
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Successfully PATCHED", data);
        props.dispatch(handleUser(props.user.email));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    toast.warning("Order Deleted", toastStyler);
  };

  //Column headings
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
    },
    {
      field: "user",
      headerName: "Name of Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.image[0]} alt="" />
            {params.row.title}
          </div>
        );
      },
    },

    {
      field: "type",
      headerName: "Type",
      width: 80,
    },
    {
      field: "Category",
      headerName: "Category",
      width: 150,
    },
    {
      field: "discount",
      headerName: "Discount",
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
            <Link
              to={{
                pathname: "/reviewform",
                state: { productId: params.row.id },
              }}
            >
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

  //We see if the user is authorised.
  const { authorized } = props;
  if (!authorized) {
    return <Redirect to="/login" />;
  }

  //rendering the data grid.
  return (
    <div className="container">
      <Sidebar />
      <div className="myOrders">
        <div className="userTitleContainer">
          <h1 className="userTitle">My Orders</h1>
          <Link to="/">
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

//Getting the user from store as props.
function mapStateToProps(state) {
  return {
    user: state.user.userData,
    authorized: state.user.isLoggedIn,
  };
}
export default connect(mapStateToProps)(UserProfile);
