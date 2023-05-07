export const UserNameAct = (userName:string) =>{
    return {type:'userName',userName}
}
export const UserNameActReset = (reset:string) =>{
    return {type:'resetuserName',reset}
}
export const UserLoginAct = (userLogin:string) =>{
    return {type:'userLogin',userLogin}
}
export const UserLoginActReset = (reset:string) =>{
    return {type:'resetuserLogin',reset}
}
export const UserPasswordAct = (userPassword:string) =>{
    return {type:'userPassword',userPassword}
}
export const UserPasswordActReset = (reset:string) =>{
    return {type:'resetuserPassword',reset}
}