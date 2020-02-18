
const initialState = {arenaSize:[80,90] };

 const arenaReducer= (state = initialState, action)=> {
    const updateState = { ...state };
    switch (action.type) {
        case "SIZE":
            updateState.arenaSize = action;
            console.log("updateState.state");
            
            return updateState;
        default:
            return state
    }
}

export default arenaReducer