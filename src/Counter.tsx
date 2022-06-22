import { StatHelpText } from "@chakra-ui/react"
import { useReducer } from "react"

const initialState = {count: 0}
const reducer: (state: any, action: any) => {count: number} = (state, action) => {

    switch(action.type) {
        case  'increment': {
            return {count: state.count + (action.payload || 1)}
        }
        case  'decrement': {
            return {count: state.count - (action.payload || 1)}
        }
    
    }
    return {...state}

}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer,initialState )
    return <>
    Count {state.count}
    <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    <button onClick={() => dispatch({type: 'increment'})}>+</button>
    <button onClick={() => dispatch({type: 'increment', payload: 2})}>+2</button>

    </>
}
