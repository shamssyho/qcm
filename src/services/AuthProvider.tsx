import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
    user: { username: string; role: string } | null;
    login: (username: string, role: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{ username: string; role: string } | null>(null);

    const login = (username: string, role: string) => {
        setUser({ username, role });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
