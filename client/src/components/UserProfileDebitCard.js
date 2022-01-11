/* This page renders all the debit cards the user has added.  */

import "../styles/UserProfileDebitCard.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { handleUser } from "../actions";
import { connect } from "react-redux";

const UserProfileDebitCard = (props) => {
  //Since  debit cards is an array, we initiate the array.

  const [data, setData] = useState([]);

  let newUser = props.user;
  useEffect(() => {
    setData(props.user.debitCards);
  }, [props.user.debitCards]);

  //This function handles delete on clicking taking the id as param.
  const handleDelete = (id) => {
    //We delete this particular id.

    let afterDelete = data.filter((item) => item.id !== id);

    setData(afterDelete);

    //Set this as the new delivery adress

    newUser.debitCards = afterDelete;
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
    toast.warning("Debit Card Deleted");
  };

  //This is the schema for rendering the adresses in the table.

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "types",
      headerName: "Card Type",
      width: 220,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.type}
          </div>
        );
      },
    },
    {
      field: "cardNo",
      headerName: "Card Number",
      width: 220,
    },
    {
      field: "name",
      headerName: "Name on card",
      width: 220,
    },
    {
      field: "expiry",
      headerName: "Expiry Date",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              className="userListEdit"
              onClick={() => handleDelete(params.row.id)}
              style={{ backgroundColor: "rgb(235, 83, 83)" }}
            >
              Delete
            </button>
            <DeleteOutlineIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  //this is the component we are gonna return

  return (
    <div className="container">
      <Sidebar />
      <div className="adressList">
        <div className="userTitleContainer">
          <h1 className="userTitle">Debit Cards</h1>
          <Link to="/newCard">
            <button className="userAddButton">Add Card</button>
          </Link>
        </div>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
          rowHeight={80}
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

//getting user as props from store.

function mapStateToProps(state) {
  return {
    user: state.user.userData,
  };
}
export default connect(mapStateToProps)(UserProfileDebitCard);
