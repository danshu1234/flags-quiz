import { createStore } from "redux"

interface Store {
    points: number,
    isOpenSecondLevel: boolean,
    points2: number,
    isOpenThirdLevel: boolean,
}

const firstLevelPoints: Store = {
    points: 0,
    isOpenSecondLevel: false,
    points2: 0,
    isOpenThirdLevel: false,
}

const PLUS: string = 'PLUS'
const PLUS2: string = 'PLUS2'
const OPEN_SECOND_LEVEL: string = 'OPEN_SECOND_LEVEL'
const OPEN_THIRD_LEVEL: string = 'OPEN_THIRD_LEVEL'

const reducer = (state = firstLevelPoints, action: {type: string}): Store => {
    switch (action.type) {
        case PLUS:
            return {...state, points: state.points + 1}
        case OPEN_SECOND_LEVEL:
            return {...state, isOpenSecondLevel: true} 
        case PLUS2:
            return {...state, points2: state.points2 + 1}   
        case OPEN_THIRD_LEVEL:
            return {...state, isOpenThirdLevel: true} 
        default:
            return state    
    }
}

export const store = createStore(reducer)