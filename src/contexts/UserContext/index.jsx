import { createContext, useContext, useMemo, useState } from 'react';

export const UserContext = createContext();

UserContext.displayName = 'UserContext';

function User({ children }) {
  const [userInfo, setUserInfo] = useState({});

  const value = useMemo(
    () => ({ setUserInfo, userInfo }),
    [userInfo]
  );

  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

export default User;
