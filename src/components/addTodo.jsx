import React, { Component } from "react";

class addTodo extends Component {
  state = {
    id: "",
    name: null,
    desc: null,
  };
  getRandomId = () => {
    return Math.floor(Math.random() * 100);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.desc) {
      const randomId = this.getRandomId();
      const todo = {
        id: randomId,
        name: this.state.name,
        desc: this.state.desc,
      };
      this.props.addTodoItem(todo);
    }
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClose = () => {
    this.props.toggleOpenTodoAddWindow();
  };
  render() {
    return (
      <div className="fixed top-0 left-0 bg-gray-500 bg-darken-3 bg-opacity-75  w-full">
        <div className="flex flex-col justify-center items-center  h-screen p-32">
          <form
            onSubmit={this.handleSubmit}
            className="w-full h-full mx-16 relative  bg-gray-600 rounded-lg flex flex-col justify-center items-center"
          >
            <button
              onClick={() => {
                this.handleClose();
              }}
              className="group absolute right-0 top-0 py-2 px-4 m-4 bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 text-white rounded-lg transition duration-150 ease-in-out float-right"
            >
              X
            </button>
            <ul className="space-y-8 w-full text-black p-16">
              <li>
                <input
                  className="p-2  w-full bg-gray-500 placeholder-black  focus:bg-white  border-gray-800 rounded-lg border-2"
                  name="name"
                  type="text"
                  placeholder="todo name"
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <input
                  className="p-2 bg-gray-500 focus:bg-white placeholder-black  w-full border-gray-800 rounded-lg border-2"
                  name="desc"
                  type="text"
                  placeholder="todo description"
                  onChange={this.handleChange}
                />
              </li>
              <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                Submit
              </button>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default addTodo;
