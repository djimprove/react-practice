import React, { Component } from "react";

class todo extends Component {
  handleClick = (id) => {
    this.props.changeTodo(id);
  };

  render() {
    const todoItemList =
      this.props.todoItems &&
      this.props.todoItems.map((todo) => {
        return (
          <ul
            key={todo.id}
            className="flex justify-between uppercase  border-black border border-2 text-center p-4 "
          >
            <li className="text-lg ">
              <a href="/">{todo.name}</a>
            </li>
            <li className="text-sm">{todo.desc}</li>
            <li className="flex flex-row justify-between items-center float-right">
              <input
                className=""
                title="completed"
                type="checkbox"
                name="done"
                id="status"
                checked={todo.completed}
                onChange={() => {
                  this.handleClick(todo.id);
                }}
              />
              <button
                onClick={() => {
                  this.props.deleteTodo(todo.id);
                }}
                className="text-xs py-2 px-4 ml-2 bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 text-white rounded-lg transition duration-150 ease-in-out float-right"
              >
                delete
              </button>
            </li>
          </ul>
        );
      });
    return (
      <div className="">
        <div className="space-y-4 ">{todoItemList}</div>
      </div>
    );
  }
}

export default todo;
