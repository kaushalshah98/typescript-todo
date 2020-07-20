import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Container from "./components/to-do-container/container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useToDoState from "./stateMaintainer/state";

library.add(faTrash);

const App = () => {
  const { list, newItem, handleInput, onUpdateItem, onAddItem, onDeleteItem } = useToDoState();
  return (
    <Fragment>
      <NavBar totalItems={list.length}></NavBar>
      <Container
        list={list}
        newItem={newItem}
        onUpdateItem={onUpdateItem}
        onHandleInput={handleInput}
        onDeleteItem={onDeleteItem}
        onAddItem={onAddItem}
      ></Container>
    </Fragment>
  );

}

export default App;
