
const INITIAL_STATE = {
     logged: false,
     username: null
};

const userReducer = (state = INITIAL_STATE, action) => {

     switch (action.type) {
          case "LOGIN":
               return {

                    ...state,
                    username: action.payload,
                    logged: true,
               };
          case "LOGOUT":
               return {

                    ...state,
                    username: null,
                    logged: false,
               };
          default: return state;

     }

};

export default userReducer;