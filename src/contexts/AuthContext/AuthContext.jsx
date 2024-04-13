// import React, { createContext, useContext, useReducer } from 'react';

// const AuthContext = createContext();

// const initialState = {
//   isAuthenticated: false,
//   user: null,
//   token: null,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN':
//       return {
//         isAuthenticated: true,
//         user: action.payload.user,
//         token: action.payload.token,
//       };
//     case 'LOGOUT':
//       return { isAuthenticated: false, user: null, token: null };
//     default:
//       return state;
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export { AuthProvider, useAuth };
