import { user } from "../../utils/types";
interface UserState {
    user: user | null;
}

export type UserAction = 
    | { type: 'LOGIN SUCCESS', payload: user }
    | { type: 'LOGIN FAILED' }
    | { type: 'LOGOUT' };

export const userReducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
        case 'LOGIN SUCCESS':
        return {
            ...state,
            user: action.payload,
        };
        case 'LOGIN FAILED':
            return {
                ...state,
                user: null,
            };
        case 'LOGOUT':
        return {
            ...state,
            user: null,
        };
        default:
        return state;
    }
}