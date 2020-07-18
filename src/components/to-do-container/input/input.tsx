import React from "react";
import "./input.scss";
import { INewItem } from "../../../shared/interface";

const Input = (props: inputProps) => {
  const { newItem, onHandleInput } = props;
  return (
    <div className="form">
      <header>
        <form id="todo-form">
          <input
            type="text"
            onChange={onHandleInput}
            placeholder="Type..."
            value={newItem.value}
          ></input>
        </form>
      </header>
    </div>
  );
};
export interface inputProps {
  newItem: INewItem;
  onHandleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default Input;
