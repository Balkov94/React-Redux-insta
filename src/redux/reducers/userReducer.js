
const INITIAL_STATE = {
     logged: false,
     username: null,
     userID:null,
     mobile: null,
     name:null,
     username:null,
     password:null,
     posts:null,
     followers:null,
     following:null,
     profPicture:null
};

const userReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
          case "LOGIN":
               return {
                    ...state,
                    logged: true,
                    userID:action.payload.userID,
                    mobile: action.payload.mobile,
                    name:action.payload.name,
                    username:action.payload.username,
                    password:action.payload.password,
                    posts:action.payload.posts,
                    followers:action.payload.followers,
                    following:action.payload.following,
                    profPicture:action.payload.profPicture

               };
          case "LOGOUT":
               return {

                    ...state,
                    logged: false,
                    username: null,
                    userID:null,
                    mobile: null,
                    name:null,
                    username:null,
                    password:null,
                    posts:null,
                    followers:null,
                    following:null,
                    profPicture:null
               };
          default: return state;

     }

};

export default userReducer;