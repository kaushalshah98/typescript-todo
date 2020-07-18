import React, { FC } from "react";
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
// can be used with a class
// NavBar.propTypes = {
//   totalItems: React.propTypes.number.isRequired,
//   total: React.propTypes.number,
// };
// NavBar.defaultProps = {
//   totalItems: 0,
// };
// NavBar.propTypes = {
//   totalItems(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`);
//     }
//     if (props[propName] < 0) {
//       return new Error(`Negative ${propName}`);
//     }
//   },
// };
export default NavBar;
