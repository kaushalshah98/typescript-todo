import React, { Component, Fragment, ChangeEvent } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Container from "./components/to-do-container/container";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IAppState, IAppProps, INewItem } from "./shared/interface";
library.add(faTrash);
class App extends Component<IAppProps, IAppState>{
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      list: [],
      newItem: {
        key: 0,
        value: "",
      },
    };
  }
  onDeleteItem = (key: number) => {
    const list = this.state.list.filter((item: INewItem) => item.key !== key);
    this.setState({ list });
  };
  onAddItem = (e: ChangeEvent) => {
    console.log(typeof (e));
    e.preventDefault();
    const { newItem } = this.state;
    if (newItem.value !== "") {
      const list = [...this.state.list, newItem];
      this.setState({ list, newItem: { key: 0, value: "" } });
    }
  };
  onUpdateItem = (key: number, value: string) => {
    const { list } = this.state;
    list.forEach((item) => {
      if (item.key === key) {
        item.value = value;
      }
    });
    this.setState({ list });
  };
  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    const key = Date.now();
    this.setState({ newItem: { value, key } });
  };
  render() {
    return (
      <Fragment>
        <NavBar totalItems={this.state.list.length}></NavBar>
        <Container
          list={this.state.list}
          newItem={this.state.newItem}
          onUpdateItem={this.onUpdateItem}
          onHandleInput={this.handleInput}
          onDeleteItem={this.onDeleteItem}
          onAddItem={this.onAddItem}
        ></Container>
      </Fragment>
    );
  }
}

export default App;
