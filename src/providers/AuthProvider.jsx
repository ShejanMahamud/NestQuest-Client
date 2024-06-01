import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import auth from './../config/firebase.config';
import useAxiosCommon from './../hooks/useAxiosCommon';
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
const [loading,setLoading] = useState(true)
const [user,setUser] = useState(null)
const axiosCommon = useAxiosCommon()
const googleLogin = async () => {
    const googleProvider = new GoogleAuthProvider()
   return await signInWithPopup(auth,googleProvider)
}

const emailPasswordRegister = async (email,password) => {
    return await createUserWithEmailAndPassword(email,password)
}

const emailPasswordLogin = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = async () => {
    return await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
        setUser(currentUser);
        if (currentUser) {
            const userInfo = { email: currentUser.email };
            const {data} = await axiosCommon.post('/jwt', userInfo)
            if(data.token){
                localStorage.setItem('access-token', data.token);
                setLoading(false);
            }
        }
        else {
            localStorage.removeItem('access-token');
            setLoading(false);
        }
        
    });
    return () => {
        return unsubscribe();
    }
}, [user,axiosCommon])


  const authInfo = {googleLogin,loading,user,emailPasswordRegister,emailPasswordLogin,logOut};

  return (
    <AuthContext.Provider value={authInfo}>{children}
    <Toaster position="top-right" reverseOrder={true} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
