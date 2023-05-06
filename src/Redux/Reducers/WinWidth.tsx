type WinAct = {
    type:string,
    setWidth:number
}
export let WinWidth = (state:number = window.innerWidth,action:WinAct) => {
switch (action.type) {
    case 'winWidth':return state = action.setWidth
    default:return state
}
}