import React from "react";
// import logo from './logo.svg';
// import { Counter } from './counter/Counter';
import "./App.css";
import {
  Container,
  Navbar,
  NavbarBrand,
  FormGroup,
  Button,
  Form,
  Input,
} from "reactstrap";
import SherryLogo from ".//app/assets/SherryLogo.png";
// import { CATEGORIES } from "./app/shared/CATEGORIES";
import Categorieslist from "./features/categories/CategoriesList";

function App() {
  return (
    <div className="App">
      <Navbar dark color="info" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={SherryLogo} alt="Sherry logo" />
          </NavbarBrand>
        </Container>
        <Form inline>
          <FormGroup>
            <Input type="text" placeholder="Search" />
          </FormGroup>
          <Button color="light">Search</Button>
        </Form>
      </Navbar>
      <Categorieslist />
    </div>
  );
}

export default App;
