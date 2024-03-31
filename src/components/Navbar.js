import React from "react";
import { Layout } from "antd";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import logo from "../static/polyglot_logo.png";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "2px" }}
        />
        <h2>Polyglot</h2>
      </div>
      <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
        <LoginButton />
        <LogoutButton />
      </div>
    </Header>
  );
};

export default Navbar;
