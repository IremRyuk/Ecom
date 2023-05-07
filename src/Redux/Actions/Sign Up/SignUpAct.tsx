export const UserNameActSU = (userName:string) =>{
    return {type:'userNameSU',userName}
}
export const UserNameActResetSU = (reset:string) =>{
    return {type:'resetuserName',reset}
}
export const UserLoginActSU = (userLogin:string) =>{
    return {type:'userLoginSU',userLogin}
}
export const UserLoginActResetSU = (reset:string) =>{
    return {type:'resetuserLogin',reset}
}
export const UserPasswordActSU = (userPassword:string) =>{
    return {type:'userPasswordSU',userPassword}
}
export const UserPasswordActResetSU = (reset:string) =>{
    return {type:'resetuserPassword',reset}
}