import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin";
const ProductCreate = (props) => {
  return (
    <Create title={"add a product"} {...props}>
      <SimpleForm>
        <TextInput label="Title" source="productName" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="Stock Availability" source="quantity" />
        <TextInput label="description" source="description" />
        <TextInput label="Image Link" source="image[0]" />
        <NumberInput
          label="rating"
          source="rating.rate"
          disabled
          defaultValue={0}
        />
        <NumberInput
          label="rating"
          source="rating.count"
          disabled
          defaultValue={0}
        />
        <TextInput label="Type" source="type" />
        <TextInput label="Category" source="category" />
        {/* <ArrayInput label="Faq" source="Faq">
          <SimpleFormIterator>
            <TextInput
              source="Question"
              label="Question"
              defaultValue="Is there any warranty"
            />
            <TextInput
              source="Answer"
              label="Answer"
              defaultValue="I don't know. But this is super product ..."
            />
            <NumberInput label="Upvotes" source="Upvotes" defaultValue={0} />
          </SimpleFormIterator>
        </ArrayInput> */}
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
