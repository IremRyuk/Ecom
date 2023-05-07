export const UserPassword = (userPassword:string) =>{
    return {type:'userPassword',userPassword}
}
export const UserPasswordReset = (reset:string) =>{
    return {type:'userPasswordReset',reset}
}