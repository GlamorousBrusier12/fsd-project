import "../styles/UserProfileUPI.css";
import Sidebar from "./Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserProfileUPI = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3000/upi")
      .then((res) => res.json())
      .then((data) => {
        console.log("Success: data from server", data);
        setData(data);
      });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    fetch("http://localhost:3000/upi/" + id, {
      method: "DELETE",
    });
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
      headerName: "UPI Type",
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
      headerName: "UPI Id",
      width: 220,
    },
    {
      field: "name",
      headerName: "Name on UPI",
      width: 220,
    },
    {
      field: "phoneNo",
      headerName: "Phone number",
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
          <h1 className="userTitle">Saved UPI</h1>
          <Link to="/newUPI">
            <button className="userAddButton">Add UPI</button>
          </Link>
        </div>
        <DataGrid
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
          rowHeight={80}
        />
      </div>
    </div>
  );
};

export default UserProfileUPI;
