import { SavedCart } from "./SavedCart";
import { Search } from "./Search";
import {combineReducers} from 'redux'
import { WinWidth } from "./WinWidth";
import { UserNameR } from "./LogIn/UserNameR";
import { UserPasswordR } from "./LogIn/UserPasswordR";
import { UserLoginSUR, UserNameSUR, UserPasswordSUR } from "./SignUp/SignUpR";
export const All = combineReducers({
    search:Search,
    savedCart:SavedCart,
    winInnerWidth:WinWidth,
    // Log In
    userName:UserNameR,
    userPassword:UserPasswordR,
    // Sign Up
    userNameSU:UserNameSUR,
    userLoginSU:UserLoginSUR,
    userPasswordSU:UserPasswordSUR
})