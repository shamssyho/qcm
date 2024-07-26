import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the login logic here
        console.log('Login with:', email, password);
    };
    const navigate = useNavigate()
    const handleSetNewPassword = () => {
        navigate('/forgot-password"')
    }

    return (
        <div className="text-center flex justify-center">
            <div className="bg-gray-50 rounded-xl m-12 mb-auto w-96 p-5">
                <h2 className='text-2xl font-bold mb-10'>Se connecter</h2>
                <form onSubmit={handleSubmit} className='space-y-5'>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                    </div>
                    <div className="text-sm mb-10" onClick={handleSetNewPassword}>
                        <a href="/forgot-password" className="text-blue-600 hover:text-blue-800">Mot de passe oublié ? Cliquer sur ce lien</a>
                    </div>
                    <button type="submit" className="w-full py-2.5 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                        SE CONNECTER
                    </button>
                </form>
            </div>
        </div>
    );
}


