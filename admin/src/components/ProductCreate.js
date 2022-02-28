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
        <NumberInput label="Id" source="id" />
        <TextInput label="Title" source="title" />
        <NumberInput label="Price" source="price" />
        <NumberInput label="Discount" source="discount" />
        <NumberInput label="Stock Availability" source="stockAvailable" />
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
        <TextInput label="Category" source="Category" />
        {/* <ArrayInput source="Reviews" value={[]} />
        <ArrayInput source="Faq" value={[]} /> */}
        <ArrayInput label="Reviews" source="Reviews">
          <SimpleFormIterator>
            <TextInput
              source="UserName"
              label="username"
              defaultValue="Naveen"
            />
            <NumberInput label="Rating" source="Rating" defaultValue={5} />
            <TextInput
              source="Heading"
              label="Heading"
              defaultValue="This is good"
            />
            <TextInput
              source="Body"
              label="Body"
              defaultValue="The product is too good worth buying it"
            />
          </SimpleFormIterator>
        </ArrayInput>
        <ArrayInput label="Faq" source="Faq">
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
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
