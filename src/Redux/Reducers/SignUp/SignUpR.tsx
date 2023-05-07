type Act = {
    type:string
    userName:string
    reset:string
    userLogin:string
    userPassword:string
}
export const UserNameSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userName':return state = action.userName
    case 'resetuserName':return state = action.reset
        default:return state
    }
}
export const UserLoginSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userLogin':return state = action.userLogin
    case 'resetuserLogin':return state = action.reset
        default:return state
    }
}
export const UserPasswordSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userPassword':return state = action.userPassword
    case 'resetuserPassword':return state = action.reset
        default:return state
    }
}