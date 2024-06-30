import { Dispatch, createContext,useEffect, useReducer,ReactNode} from "react";
import {userReducer} from './Reducer';
import {UserAction} from './Reducer';

// interface state {
//     user: any;

// }

interface ContextType {
    user: any;
    dispatch: Dispatch<UserAction>;

}


const initialState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
}

type UserContextProviderProps = {
    children: ReactNode; // This type accepts any valid React child
};

//create context
export const UserContext = createContext<ContextType | undefined>(undefined);

//provider component
export const UserContextProvider: React.FC<UserContextProviderProps>= ({children}) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <UserContext.Provider value={{user: state.user, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}