import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  TextField,
} from "react-admin";
const ProductCreate = (props) => {
  console.log("hello1");
  return (
    <Create title={"add a product"} {...props}>
      <SimpleForm>
        <TextInput disabled source="Id" />
        <TextInput label="Title" source="title" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Discount" source="discount" />
        <TextInput label="Stock Availability" source="stockAvailable" />
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
