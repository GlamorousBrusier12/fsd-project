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
    <List {...props}>
      <Datagrid>
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="price" />
        <TextField source="stockAvailable" />
        <EditButton basePath="/products" />
        <DeleteButton basePath="/products" />
      </Datagrid>
    </List>
  );
};

export default Products;
