import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Lists from "./Lists";
class Todolist extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
      items: [],
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  onDeleteHandler = (index) => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({
      items: deleteTask,
    });
  };
  onFormHandler = (e) => {
    e.preventDefault();
    this.state.todo === ""
      ? alert("Todo item is empty")
      : this.setState({
          items: [...this.state.items, this.state.todo],
          todo: "",
        });
  };
  //   onDeleteHandler = (index) => {

  //   };
  render() {
    return (
      <div className="container">
        <form>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Your task"
              aria-label="task"
              aria-describedby="basic-addon2"
              type="text"
              value={this.state.todo}
              onChange={this.onChangeHandler}
            />
            <Button
              onClick={this.onFormHandler}
              variant="outline-secondary"
              id="add-button"
            >
              Add Item
            </Button>
          </InputGroup>
        </form>

        <Lists deleteTask={this.onDeleteHandler} item={this.state.items} />
      </div>
    );
  }
}

export default Todolist;
