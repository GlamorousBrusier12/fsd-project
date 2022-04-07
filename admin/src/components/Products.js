import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
  NumberField,
} from "react-admin";
const Products = (props) => {
  return (
    // renders the list received from the props
    <List {...props}>
      <Datagrid>
        <TextField source="_id" />
        <TextField source="productName" />
        <TextField source="price" />
        <TextField source="quantity" />
        <EditButton basePath="/product" />
        <DeleteButton basePath="/product" />
      </Datagrid>
    </List>
  );
};

export default Products;
