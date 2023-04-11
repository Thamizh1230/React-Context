export const initialzevalue ={
    name:"React",
    newarr:[],
    isLoggedin : JSON.parse(localStorage.getItem("Login")) || false,
    
}


export const stateReducer=(state, action)=>{
    console.log("state",state, "action", action);
    switch(action.type){
        case "UPDATE_NAME" :
        return{
            ...state,
            name: action.payload,
        };

        case "UPDATE_FORM":
            return{
                ...state,
                newarr: action.payload,
            }

        case "LOGIN":
            return{
                ...state,
                isLoggedin: action.payload,
            }
        default:
            return state
    }
}