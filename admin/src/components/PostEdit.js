import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  TextField,
} from "react-admin";
const ProductEdit = (props) => {
  // console.log("hello1");
  return (
    <Edit title={"Edit a product"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextField label="Title" source="title" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Discount" source="discount" />
        <TextInput label="Stock Availability" source="stockAvailable" />
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
