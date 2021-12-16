import "../styles/adressList.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState } from "react";
import userRows from "../dummyData";

const AdressList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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
          <Link to="/newUser">
            <button className="userAddButton">Add Adress</button>
          </Link>
        </div>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AdressList;
