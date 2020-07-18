import React, { FC } from "react";
import "./add.scss";

interface Props {
  onAddItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}
const Add: FC<Props> = ({ onAddItem }) => {
  return (
    <div className="add-btn">
      <button onClick={onAddItem}>ADD</button>
    </div>
  );
};

export default Add;
