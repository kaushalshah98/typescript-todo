import React, { FC, memo } from "react";
import "./navbar.scss";

const NavBar: FC<{ totalItems: number }> = ({ totalItems }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalItems}
        </span>
      </div>
    </nav>
  );
};

export default memo(NavBar);
