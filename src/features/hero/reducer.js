
const initialState = {move:[-50,-50],shoot:[100]};


const movementReducer= (state = initialState, action)=>{
    const updateState = { ...state };
    switch (action.type) {
        // case "UP":
        //     updateState.move[0] = state.move[0] - 25;
        //     console.log(state.move);
        //     return updateState;
        //     case "DOWN":
        //     updateState.move[0] = state.move[0] + 25;
        //     console.log(state.move);
        //     return updateState;
            case "LEFT":
            updateState.move[1] = state.move[1] - 25;
            console.log(state.move);
            return updateState;
            case "RIGHT":
            updateState.move[1] = state.move[1] + 25;
            console.log(state.move);
            return updateState;
            case "SHOOT":
                updateState.shoot[0] = state.shoot[0] + 1;
                console.log(state.shoot);
            return updateState;
        default:
            return state;
    }
}

export const moveup = () => {
    return {
        type: "UP"
    }
}
 export const movedown = () => {
    return {
        type: "DOWN"
    }
}
export const moveleft = () => {
    return {
        type: "LEFT"
    }
}
 export const moveright = () => {
    return {
        type: "RIGHT"
    }
}
export const shooter = () => {
    return {
        type: "SHOOT"
    }
}

export default movementReducer