import React, { Fragment, FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./delete.scss";

interface Props {
  onDeleteItem: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}
const Delete: FC<Props> = ({ onDeleteItem }) => {
  return (
    <Fragment>
      <span>
        <FontAwesomeIcon
          className="faicons"
          icon="trash"
          onClick={onDeleteItem}
        ></FontAwesomeIcon>
      </span>
    </Fragment>
  );
};

export default Delete;
