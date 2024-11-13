import { createStore } from "redux"

interface Store {
    points: number,
    isOpenSecondLevel: boolean
}

const firstLevelPoints: Store = {
    points: 0,
    isOpenSecondLevel: false,
}

const PLUS: string = 'PLUS'
const OPEN_SECOND_LEVEL: string = 'OPEN_SECOND_LEVEL'

const reducer = (state = firstLevelPoints, action: {type: string}): Store => {
    switch (action.type) {
        case PLUS:
            return {...state, points: state.points + 1}
        case OPEN_SECOND_LEVEL:
            return {...state, isOpenSecondLevel: true} 
        default:
            return state    
    }
}

export const store = createStore(reducer)