import React, { FC, memo } from "react";
import NavBarHTML from './navbar.html';
import "./navbar.scss";
const NavBar: FC<{ totalItems: number }> = ({ totalItems }) => {
  return (
    <NavBarHTML totalItems={totalItems} />
  );
};

export default memo(NavBar);
