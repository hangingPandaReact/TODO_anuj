import React from "react";
class Lists extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.item?.map((item, index) => (
            <li key={index} onClick={this.props.deleteTask.bind(this, index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lists;
