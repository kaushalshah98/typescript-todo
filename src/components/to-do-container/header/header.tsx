import React, { FC, FormEvent } from "react";
import Input from "../input/input";
import Add from "../../../shared/add/add";
import "./header.scss";
import { INewItem } from "../../../shared/interface";

const Header: FC<headerProps> = (props) => {
  const { newItem, onHandleInput, onAddItem } = props;
  return (
    <>
      <Input
        newItem={newItem}
        onHandleInput={onHandleInput}
      ></Input>
      <Add onAddItem={onAddItem}></Add>
    </>
  );
};
export interface headerProps {
  newItem: INewItem;
  onHandleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddItem: () => FormEvent;
}
export default Header;
