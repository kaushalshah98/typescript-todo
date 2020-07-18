import React, { Fragment, FormEvent, memo } from "react";
import "./list-container.scss";
import List from "../list/list";
import { INewItem } from "../../../shared/interface";

const ListContainer = (props: listcontainerProps) => {
  const { list, onUpdateItem, onDeleteItem } = props;
  const listItems = list.map((item) => {
    return (
      <List
        key={item.key}
        item={item}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
      />
    );
  });
  return <Fragment>{listItems}</Fragment>;
};

export interface listcontainerProps {
  list: INewItem[];
  onUpdateItem: () => void;
  onDeleteItem: () => FormEvent;
}
export default memo(ListContainer);
