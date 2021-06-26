import * as actionTypes from '../actions/actiontypes';

const initialState = { count: 0 };

const reducer = (state = { initialState },action) => {
  switch (action.type) {
    case actionTypes.ACTION:
      return state;
      case actionTypes.FIXME:
        return state+1;

    default:
      return state;
  }
};

export default reducer;
