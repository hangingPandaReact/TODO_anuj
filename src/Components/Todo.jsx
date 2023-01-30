import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
class Todo extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tasks: [],
      newtask: "",
      editflag: false,
      editIndex: null,
    };
  }
  handleUpdate = (e) => {
    var temp = this.state.tasks;
    temp[this.state.editIndex] = this.state.newtask;
    this.setState({
      tasks: [...temp],
      editIndex: null,
      editflag: false,
      newtask: "",
    });
  };
  addtask = () => {
    this.state.newtask === ""
      ? alert("Todo item is empty")
      : this.setState({
          tasks: [...this.state.tasks, this.state.newtask],
          newtask: "",
        });
  };

  handledelete = (index) => {
    var temp = this.state.tasks;
    temp.splice(index, 1);
    this.setState({ tasks: [...temp] });
  };
  handleEdit = (index) => {
    var x = this.state.tasks[index];
    this.setState({ newtask: x, editflag: true, editIndex: index });
  };
  render() {
    return (
      <div>
        <h2 className="top">Todo-App</h2>
        <p className="top">Write your daily task here</p>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            className="text"
            onChange={(e) => {
              this.setState({ newtask: e.target.value });
            }}
            value={this.state.newtask}
            placeholder="Write your task here"
          />
          {!this.state.editflag && (
            <button className="btn" onClick={this.addtask}>
              Add Task
            </button>
          )}
          {this.state.editflag && (
            <button className="btn" onClick={this.handleUpdate}>
              Update
            </button>
          )}
        </InputGroup>

        {this.state.tasks.map((t, i) => {
          return (
            <>
              <li key={i} className="list-item">
                <div>{t}</div>
                <div className="btn-div">
                  <Button
                    className="btn .text-danger"
                    variant="outline-secondary"
                    onClick={() => {
                      this.handledelete(i);
                    }}
                  >
                    delete
                  </Button>
                  <Button
                    className="btn"
                    variant="outline-secondary"
                    onClick={() => {
                      this.handleEdit(i);
                    }}
                  >
                    Edit
                  </Button>
                </div>
              </li>
            </>
          );
        })}
      </div>
    );
  }
}
export default Todo;
