type jobAction = 'addJob' |  'viewJob' |  'profile'

interface jobState {
    type: jobAction;
    payload: any
        
}
 export const jobReducer = (state: jobState, action: jobAction) => {
    
    switch(action.type){
        case 'addJob':
            return {
                ui: action.payload
            }
        case 'viewJob':
            return {
                ui: action.payload
            }
        case 'profile':
             return {
                ui: action.payload
            }
        default:
            return state;
    }
}