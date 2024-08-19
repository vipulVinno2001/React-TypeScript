import React, { useReducer } from 'react'



type stateType={
    count:number,

}

type actionUpdate = {
    type:'increment' | 'decrement'
    payload:number
}

type actionReset = {
    type:'reset'
}

type actionType= actionUpdate | actionReset

const initialState = {
    count:0
}

function reducer(state:stateType,action:actionType){
  switch(action.type)
  {
    case 'increment':
        return {count : state.count + action.payload}
    case 'decrement':
        return {count : state.count  - action.payload}
    case 'reset':
        return initialState
        default:
            return state
  }
}

const Counter = () => {
    const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <p>Counter:{state.count}</p>
        <button onClick={ () => dispatch({type:'increment' , payload:10})}>Increment by 10</button>
        <button onClick={ () => dispatch({type:'decrement' , payload:10})}>Decrement by 10</button>
        <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Counter