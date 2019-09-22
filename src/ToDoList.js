import React, { Component } from 'react';
import store from './store/index'
import { changeInputAction, addItemAction, deleteItemAction } from './store/actionCreators'
import ToDoListUi from './ToDoListUi'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.addClick = this.addClick.bind(this)
        this.deleteClick = this.deleteClick.bind(this)
        store.subscribe(this.storeChange)
    }

    render() { 
        return ( 
            <ToDoListUi 
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                addClick={this.addClick}
                deleteClick={this.deleteClick}
            />
         );
    }

    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    addClick(){
        const action = addItemAction();
        store.dispatch(action)
    }

    deleteClick(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
}
export default TodoList;