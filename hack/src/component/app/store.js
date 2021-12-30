import { createStore } from "redux";


const USERLIST = "user-list";
const USERDATA = "user-data";

export const UserList = (userlsit) => {
    return{
        type:USERLIST,
        list: userlsit,
    }
}

export const UserData = (userdata) => {
    return{
        type:USERDATA,
        list: userdata,
    }
}

const initialState = {
    List:[],
    Data:[],
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case USERLIST:
            return{
                ...state,
                List: action.list.map((item) => {
                    return{
                        id: item.id,
                        name: item.name,
                        job: item.job,
                        major: item.major
                    }
                })
            };
            case USERDATA:
                return{
                    ...state,
                    Data: action.list.map((item)=>{
                        return{
                            id: item.id,
                            name: item.names,
                            token: item.token
                        }
                    })
                };
            default:
                return state;
            }
};

export const store = createStore(reducer);

export default store;