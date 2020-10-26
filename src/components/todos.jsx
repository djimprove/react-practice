import React, { Component } from "react";
import Todo from "./todo";
import AddTodoItem from "./addTodo";

export default class todos extends Component {
  state = {
    todoItems: [
      {
        id: 1,
        name: "let get start rect",
        desc: "i dont know",
        completed: true,
      },
      {
        id: 2,
        name: "yest im learning",
        desc: "yes maybe im perfect",
        completed: true,
      },
      { id: 3, name: "just to know", desc: "good job", completed: false },
      {
        id: 4,
        name: "create something which u know",
        desc: "good job",
        completed: false,
      },
      { id: 5, name: "great work", desc: "good job", completed: false },
      { id: 6, name: "join ,mett", desc: "good job", completed: false },
      { id: 7, name: "are you there", desc: "good job", completed: false },
      { id: 8, name: "yes we are", desc: "good job", completed: false },
      { id: 9, name: "keep up", desc: "good job", completed: false },
      { id: 10, name: "dev", desc: "good job", completed: false },
      { id: 11, name: "i know", desc: "good job", completed: false },
    ],
    openAddTodoWindo: false,
  };
  changeTodo = (id) => {
    const todosList = this.state.todoItems;
    todosList.forEach((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({
      todoItems: todosList,
    });
  };
  addTodoItem = (todo) => {
    if (todo) {
      const todoList = [...this.state.todoItems, todo];
      this.setState({
        todoItems: todoList,
        openAddTodoWindo: false,
      });
    }
  };
  toggleOpenTodoAddWindow = () => {
    const status = !this.state.openAddTodoWindo;
    this.setState({
      openAddTodoWindo: status,
    });
  };
  deleteTodo = (id) => {
    const todosList = this.state.todoItems.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todoItems: todosList,
    });
  };

  render() {
    const doneTodos = [];
    const notDoneTodos = [];
    this.state.todoItems.forEach((todo) =>
      todo.completed ? doneTodos.push(todo) : notDoneTodos.push(todo)
    );

    return (
      <div>
        <div className=" flex flex-row justify-between space-x-2 text-2xl ">
          <div className=" w-full h-64 overflow-auto  ">
            <h1>Uncompleted TodoList</h1>
            <div className="mr-2 ">
              <Todo
                todoItems={notDoneTodos}
                changeTodo={this.changeTodo}
                deleteTodo={this.deleteTodo}
              />
            </div>
          </div>
          <div className=" w-full">
            <h1 className=" ">Done TodoList</h1>
            <Todo
              className="h-32 overflow-scroll"
              todoItems={doneTodos}
              changeTodo={this.changeTodo}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-2 ">
          <button
            onClick={() => {
              this.toggleOpenTodoAddWindow();
            }}
            className="bg-blue-400  text-black p-2 hover:bg-blue-800 rounded-lg focus:outline-none "
          >
            Add Todo
          </button>
          <button className="bg-blue-400  text-black p-2 hover:bg-blue-800 rounded-lg focus:outline-none ">
            created by Dnyaneshwar
          </button>
        </div>
        {/* model */}
        <div className="">
          {this.state.openAddTodoWindo && (
            <AddTodoItem
              addTodoItem={this.addTodoItem}
              toggleOpenTodoAddWindow={this.toggleOpenTodoAddWindow}
            />
          )}
        </div>
      </div>
    );
  }
}
