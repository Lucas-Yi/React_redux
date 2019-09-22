import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'
import store from './store/index'


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        this.addClick = this.addClick.bind(this)
    }

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
                <div>
                    <Input 
                        placeholder={this.state.inputValue} 
                        style={{ width:'250px', marginRight:'10px'}}
                        onChange = {this.changeInputValue}    
                    />
                    <Button 
                        type="primary"
                        onClick = {this.addClick}
                    >增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,index)=>(<List.Item onClick={this.deleteClick.bind(this, index)}>{item}</List.Item>)}
                    />    
                </div>
            </div>
         );
    }

    changeInputValue(e){
        const action = {
            type: 'change_input_value',
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange(){
        this.setState(store.getState())
    }

    addClick(){
        const action = {
            type: 'add_item'
        }
        store.dispatch(action)
    }

    deleteClick(index){
        const action = {
            type: 'delete_item',
            index
        }
        store.dispatch(action)
    }
}
export default TodoList;