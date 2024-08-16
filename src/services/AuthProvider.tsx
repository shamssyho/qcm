import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextProps {
    user: { username: string; role: string } | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

const fakeUsers = [
    { username: 'admin@example.com', password: 'admin', role: 'admin' },
    { username: 'stagiaire@example.com', password: 'stagiaire', role: 'stagiaire' },
];

export const AuthContext = createContext<AuthContextProps>({
    user: null,
    login: () => { },
    logout: () => { },
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<{ username: string; role: string } | null>(null);
    const navigate = useNavigate();

    const login = (username: string, password: string) => {
        const foundUser = fakeUsers.find(
            (u) => u.username === username && u.password === password
        );

        if (foundUser) {
            setUser({ username: foundUser.username, role: foundUser.role });
            if (foundUser.role === 'admin') {
                navigate('/dashboard');
            } else {
                navigate('/stagiaire-dashboard');
            }
        } else {
            alert('Identifiants incorrects');
        }
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
