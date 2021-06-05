import action from '../actions/actiontypes';

const initialState={

}

const reducer=(state={initialState},action)=>{

    switch(action.type){

        case "action": return state;
       
        default: return state;
    }

}

export default reducer;