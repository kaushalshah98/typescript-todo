import React, { FormEvent } from "react";
import Delete from "../../../shared/delete/delete";
import "./list.scss";
import { INewItem } from "../../../shared/interface";

const List = (props: listProps) => {
  const { item, onDeleteItem, onUpdateItem } = props;
  return (
    <div className="list">
      <p>
        <input
          type="text"
          value={item.value}
          onChange={(e) => onUpdateItem(item.key, e.target.value)}
        ></input>
        <Delete onDeleteItem={() => onDeleteItem(item.key)}></Delete>
      </p>
    </div>
  );
};
export interface listProps {
  item: INewItem;
  onUpdateItem: (arg0: number, arg1: string) => void;
  onDeleteItem: (agr0: number) => FormEvent;
}
export default List;
