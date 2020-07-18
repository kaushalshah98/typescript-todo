import React, { memo } from "react";
import Header from "./header/header";
import ListContainer from "./list-container/list-container";
import "./container.scss";
import { INewItem } from "../../shared/interface";

const TodoContainer = (props: containerProps) => {
  const {
    newItem,
    list,
    onHandleInput,
    onDeleteItem,
    onUpdateItem,
    onAddItem,
  } = props;
  return (
    <div className="containerr">
      <Header
        newItem={newItem}
        onHandleInput={onHandleInput}
        onAddItem={onAddItem}
      ></Header>
      <ListContainer
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
        list={list}
      ></ListContainer>
    </div>
  );
};
export interface containerProps {
  newItem: INewItem;
  onHandleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteItem: any;
  onUpdateItem: any;
  onAddItem: any;
  list: INewItem[];
}
export default memo(TodoContainer);
