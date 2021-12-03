import{createStore}from "redux"


let initialState={
    users:[
        {email:"foo@foo", name:"foo", age:24},
        {email:"bar@bar", name:"bar", age:34},
        {email:"qux@qux", name:"qux", age:44},
    ]
}

const TAGS={
    GET_USERS:"GET_USERS",
    ADD_USER:"ADD_USER",
    DELETE_USER:"DELETE_USER",
    UPDATE_USER:"UPDATE_USER"
}

function actionGetUser(){
    return{
        type:TAGS.GET_USERS,
    }
}
function actionAddUser(email, name, age){
    return {
        type:TAGS.ADD_USER,
        user:{
            email,
            name,
            age
        }
    }
}
function actionDeleteUser(email, name, age){
    return {
        type:TAGS.DELETE_USER,
        user:{
            email,
            name,
            age
        }
    }
}
function actionUpdateBoot(email, name, age){
    return {
        type:TAGS.UPDATE_USER,
        user:{
            email,
            name,
            age
        }
    }
}



function reducer(state,action){

    switch(action.type){
        case TAGS.GET_USERS:
            return state;
        case TAGS.ADD_USER:
            return{
                ...state,
                users:[...state.users,action.user]
            }
        case TAGS.DELETE_USER:
            return fnDeleteUser(state,action);
        case TAGS.UPDATE_USER:
          return fnUpdateUser(state,action);
      
        default:
            return state
    }
}

function fnUpdateUser(state,action){
    return({
        ...state,
        users:[...state.users.map((el)=>{
            if(el.email===action.user.email){
                el.name=action.user.name
                el.age=action.user.age
            }
            return el
    })]
})}
function fnDeleteUser(state,action){
    return({
        ...state,
        users:[...state.users.filter(el=>el.email!==action.user.email)]
    })
}
let store= createStore(reducer,initialState);

export{
    TAGS,
    actionAddUser,
    actionGetUser,
    actionDeleteUser,
    actionUpdateBoot
}

export default store;