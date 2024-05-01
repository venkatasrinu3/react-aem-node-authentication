const getUserData = (payload) => {
    return{
        type:"GET_USER_DATA",
        payload
    }
}

const initialState = {
    userName:"",
    password:"",
    usersList:""
}