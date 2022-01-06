import "../styles/adressList.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";

const AdressList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: data from server", data.deliveryAdress);
        setData(data.deliveryAdress);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting" + id);
    /* setData(data.filter((item) => item.id !== id)); */
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "user",
      headerName: "Name",
      width: 180,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.Name}
          </div>
        );
      },
    },
    {
      field: "phoneNo",
      headerName: "Phone Number",
      width: 180,
    },
    {
      field: "address",
      headerName: "Address",
      width: 300,
    },
    {
      field: "locationName",
      headerName: "Location Name",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
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
      <div className="adressList">
        <div className="userTitleContainer">
          <h1 className="userTitle">Delivery Adresses</h1>
          <Link to="/newAdress">
            <button className="userAddButton">Add Adress</button>
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

export default AdressList;
