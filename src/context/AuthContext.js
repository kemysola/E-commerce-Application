import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn:false,
    SetLoggedIn: () =>{}
})

export default  AuthContext;;