import "../styles/UserProfileDebitCard.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const UserProfileDebitCard = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/debitCards")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: data from server", data);
        setData(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch("http://localhost:3000/debitCards/" + id, {
      method: "DELETE",
    });
    toast.warning("Succesfully deleted Debit Card");
    history.push("/userProfileInformation");
    //setData(data.filter((item) => item.id !== id));
  };

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

export default UserProfileDebitCard;
