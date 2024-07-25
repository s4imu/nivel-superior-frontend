import { Auth } from "@/types/auth";
import {
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  auth: Auth | null;
  setAuth: (auth: Auth | null) => void;
}

const defaultAuthContext: AuthContextType = {
  auth: null,
  setAuth: () => {},
};

export const AuthContext = createContext(defaultAuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Decodificar o token para obter as informações do usuário
      const decoded = jwtDecode<Auth>(token);
      setAuth({ ...decoded, token });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
