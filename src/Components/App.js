import React, { Component } from "react";
import { v1 as uuid } from "uuid";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editTodo: false,
  };
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    let updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      id: uuid(),
      item: "",
      editTodo: false,
    });
  };
  handleDelete = (id) => {
    let filterContent = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: filterContent });
  };

  handleEdit = (id) => {
    let editContent = this.state.items.filter((item) => item.id !== id);
    let selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: editContent,
      item: selectedItem.title,
      editTodo: true,
      id: id,
    });
  };

  render() {
    return (
      <div>
        <h1 className="h1 text-uppercase font-weight-bold text-danger text-center my-4">
          Todo List
        </h1>
        <TodoInput
          item={this.state.item}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          editTodo={this.state.editTodo}
        />
        <TodoList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
