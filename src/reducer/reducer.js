import {ACTION} from '../actions/actiontypes';

const initialState={
    count=0

}

const reducer=(state={initialState},action)=>{

    switch(action.type){

        case ACTION: return state;
       
        default: return state;
    }

}

export default reducer;