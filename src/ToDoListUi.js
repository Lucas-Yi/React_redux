import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

class ToDoListUi extends Component {

    render() { 
        return ( 
            <div style={{margin:'10px'}}>
            <div>
                <Input 
                    style={{ width:'250px', marginRight:'10px'}}
                    value={this.props.inputValue}
                    onChange = {this.props.changeInputValue}    
                />
                <Button 
                    type="primary"
                    onClick = {this.props.addClick}
                >增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index)=>(<List.Item onClick={(index)=>this.props.deleteClick(index)}>{item}</List.Item>)}
                />    
            </div>
        </div>
         );
    }
}
 
export default ToDoListUi;