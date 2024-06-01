import React, { createContext } from "react";
import { Toaster } from "react-hot-toast";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const authInfo = {};

  return (
    <AuthContext.Provider value={authInfo}>{children}
    <Toaster position="top-right" reverseOrder={true} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
