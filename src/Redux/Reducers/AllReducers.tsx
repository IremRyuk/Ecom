import { SavedCart } from "./SavedCart";
import { Search } from "./Search";
import {combineReducers} from 'redux'
import { WinWidth } from "./WinWidth";
export const All = combineReducers({
    search:Search,
    savedCart:SavedCart,
    winInnerWidth:WinWidth
})