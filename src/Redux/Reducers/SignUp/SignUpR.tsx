type Act = {
    type:string
    userName:string
    reset:string
    userPassword:string
    userLogin:string
}
export const UserNameSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userNameSU':return state = action.userName
    case 'resetuserName':return state = action.reset
        default:return state
    }
}
export const UserLoginSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userLoginSU':return state = action.userLogin
    case 'resetuserLogin':return state = action.reset
        default:return state
    }
}
export const UserPasswordSUR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userPasswordSU':return state = action.userPassword
    case 'resetuserPassword':return state = action.reset
        default:return state
    }
}