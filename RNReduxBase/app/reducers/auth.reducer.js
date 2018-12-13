



const initialState = {
  userToken: null,
  isLoggedIn: false,
  user: {},
  install: {},
  actionType:null
};


var currentState = initialState;

export function AuthReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case "TEST_ACTION":
      return (currentState = { 
        ...state, 
        isLoggedIn: false,
        actionType:type
      });
      break;
  
    default:
      return (currentState = {
        ...state,
      });
      
  }
}
