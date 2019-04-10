import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import TodoItem from './TodoItem'
import  CustomerDate from './CustomerDate'

class TodoList extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[
          'Learn React',
          'Learn English',
          'Learn Vue'
      ],
      inputValue: ''
    };

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    // this.getTodoList = this.getTodoList.bind(this);
  }

  handleBtnClick(){
    if (this.state.inputValue.length > 0){
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleInputChange(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  handleItemDelete(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    // key 和 value 一致的时候可以简写
    // this.setState({
    //   list: list
    // })
    this.setState({list})
  }

  handleItemUpdate(index){
    if(this.state.inputValue.length > 0){
      const list = [...this.state.list];
      list[index] = this.state.inputValue;
      this.setState({
        list: list,
        inputValue: ''
      })
    }
  }

  getTodoList(){
    return this.state.list.map((item, index) => {
      return (
          <TodoItem
            deleteItem={this.handleItemDelete}
            updateItem={this.handleItemUpdate}
            content={item}
            index={index}
      />
      );
    });
  }

  render() {
    return (
      <Fragment>
        <div><CustomerDate /></div>
        <div>
          <input className='float-left' value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className='float-left, red-button' onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          {this.getTodoList()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
