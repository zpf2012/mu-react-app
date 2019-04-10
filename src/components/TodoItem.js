import React, {Component} from 'react';

class TodoItem extends Component{



    constructor(props){
        super(props);

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleUpdateItem = this.handleUpdateItem.bind(this);
    }

    /**
     * 子组件接收父组件传过来的参数，使用 this.props.param 接收
     * 子组件传递给父组件参数的时候，需要父组件将方法传递给子组件，子组件直接调用父组件的方法。
     */
    handleDeleteItem(){
        // console.log(this.props.index);
        // this.props.delete(this.props.index);
        const { deleteItem, index} = this.props;
        deleteItem(index);
    }

    handleUpdateItem(){
        const {updateItem, index} = this.props;
        updateItem(index);
    }

    render() {
        const {content, index} = this.props;
        return (
            <div>
                <li className='float-left' onClick={this.handleDeleteItem} key={index}>{content}</li>
                <button onClick={this.handleUpdateItem}>Update</button>
            </div>
        )
    }
}

export default TodoItem;