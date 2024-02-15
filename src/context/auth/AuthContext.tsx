import {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
type AuthProps = {
  children: ReactNode;
};
type InitialProps = {
  isAuth: boolean;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
};
export const AuthContext = createContext<InitialProps>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AuthProvider = ({ children }: AuthProps) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
