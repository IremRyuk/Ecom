
type At = {
    type:string
    searchWord:string
}

export const Search = (state:string = '',action:At) => {
    switch (action.type) {
        case 'search':return state = action.searchWord
        default:return state
    }
}