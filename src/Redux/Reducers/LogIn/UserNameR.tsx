type Act ={
    type:string
    userName:string
    reset:string
}
export const UserNameR = (state:string = '',action:Act) =>{
    switch (action.type) {
        case 'userName':return state = action.userName
        case 'userNameReset':return state = action.reset
        default:return state
    }
}