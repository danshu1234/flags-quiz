import { createStore } from "redux"

interface Store {
    points: number,
    points2: number,
}

const firstLevelPoints: Store = {
    points: 0,
    points2: 0,
}

const PLUS: string = 'PLUS'
const PLUS2: string = 'PLUS2'

const reducer = (state = firstLevelPoints, action: {type: string}): Store => {
    switch (action.type) {
        case PLUS:
            return {...state, points: state.points + 1}
        case 'NULL_ONE':
            return {...state, points: 0}  
        case PLUS2:
            return {...state, points2: state.points2 + 1}   
         case 'NULL_TWO':
            return {...state, points2: 0}    
        default:
            return state    
    }
}

export const store = createStore(reducer)