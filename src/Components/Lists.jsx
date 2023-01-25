import React from "react";
import Button from "react-bootstrap/Button";
class Lists extends React.Component {
  render() {
    return (
      <div>
        <ul className="wrapper">
          {this.props.item?.map((item, index) => (
            <>
              <li className="list" key={index}>
                <div className="list-container">
                  <input className="list-item" type="text" value={item} />

                  <button className="edit-btn text-secondary btn-r-10">
                    {" "}
                    Edit
                  </button>
                  <button
                    className="remove-btn bg-danger text-white btn-r-10"
                    onClick={this.props.deleteTask.bind(this, index)}
                  >
                    {" "}
                    Remove
                  </button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lists;
