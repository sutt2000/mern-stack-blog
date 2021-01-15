import React, { Fragment } from "react";
import Header from "../compoents/Header";
import Footer from "../compoents/Footer";
import { Navbar } from "reactstrap";
import AppNavbar from "../compoents/AddNavbar";

const MyRouter = () => (
  <Fragment>
    <AppNavbar />
    <Header />
     <h1>Hello Body</h1>
    <Footer />
  </Fragment>
);

export default MyRouter;
