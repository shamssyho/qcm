import { FormEvent, useState } from 'react';
import './Login.css'
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the login logic here
        console.log('Login with:', email, password);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Se connecter</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                        />
                    </div>
                    <div className="forgot-password">
                        <a href="/forgot-password">Mot de passe oublié ? Cliquer sur ce lien</a>
                    </div>
                    <button type="submit">
                        SE CONNECTER
                    </button>
                </form>
            </div>
        </div>
    );
}


