import { createContext, useReducer } from 'react';
import AlertReducer from './AlertReducer';
const AlertContext = createContext();

export function AlertProvider({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  const context = { alert: state, setAlert };
  return (
    <AlertContext.Provider value={context}>{children}</AlertContext.Provider>
  );
}

export default AlertContext;
