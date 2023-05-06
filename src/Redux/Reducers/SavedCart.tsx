
type At = {
    type:string
    savedCart:string
}

export const SavedCart = (state:string[] = [],action:At) => {
    switch (action.type) {
        case 'cartSave':return state = [...state,action.savedCart]
        default:return state
    }
}