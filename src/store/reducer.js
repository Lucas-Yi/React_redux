const defaultState = {
    inputValue: "Write something",
    list: [
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}

export default (state = defaultState, action) => {
    if(action.type === 'change_input_value'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'add_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue) 
        newState.inputValue = ''
        return newState
    }
    if(action.type === 'delete_item'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state;
}