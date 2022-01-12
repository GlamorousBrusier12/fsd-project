import React from "react";
import {
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
  Edit,
} from "react-admin";
const ProductEdit = (props) => {
  return (
    // edit component
    <Edit title={"Edit a product"} {...props}>
      <SimpleForm>
        <NumberInput label="Id" source="id" disabled />
        <TextInput label="Title" source="title" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="Stock Availability" source="stockAvailable" />
        <TextInput label="description" source="description" />
        <ArrayInput label="Image Links" source="image">
          <SimpleFormIterator>
            <TextInput label="Image Link" />
          </SimpleFormIterator>
        </ArrayInput>
        <TextInput label="Type" source="type" />
        <TextInput label="Category" source="Category" />
        <ArrayInput label="Faq" source="Faq">
          <SimpleFormIterator>
            <TextInput source="Question" label="Question" />
            <TextInput source="Answer" label="Answer" />
            <NumberInput
              label="Upvotes"
              disabled
              source="Upvotes"
              defaultValue={0}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ProductEdit;
