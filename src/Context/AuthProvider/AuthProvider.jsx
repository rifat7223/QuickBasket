import React, { useState } from 'react';
import{createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../Firbase/Firbase.init';
import { GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)
    const registerUser=(email,password)=>{
        setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
    }
    const loginUser=(email,password)=>{
               setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signWithGoogle=()=>{
               setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const authInfo={
        loading,
        user,
registerUser,
loginUser,
signWithGoogle
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;