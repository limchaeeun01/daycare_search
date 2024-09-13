import React, { createContext, useContext, useState } from 'react';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Context를 사용하는 커스텀 훅
export const useAuth = () => useContext(AuthContext);
