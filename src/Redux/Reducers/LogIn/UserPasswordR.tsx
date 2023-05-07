type Act ={
    type:string
    userPassword:string
    reset:string
}
export const UserPasswordR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userPassword':return state = action.userPassword
        case 'userPasswordReset':return state = action.reset
        default:return state
    }
}