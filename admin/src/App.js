import React, { Component } from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import Products from "./components/Products";
import ProductCreate from "./components/ProductCreate";
import PostEdit from "./components/PostEdit";
class App extends Component {
  render() {
    return (
      <Admin dataProvider={jsonServerProvider("http://localhost:3000")}>
        <Resource
          name="products"
          list={Products}
          create={ProductCreate}
          edit={PostEdit}
        />
      </Admin>
    );
  }
}

export default App;
