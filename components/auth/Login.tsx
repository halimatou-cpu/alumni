import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {

    };

    return (
        <div className="m-5 flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Page de Login</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-2 border-gray-300 p-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border-2 border-gray-300 p-2 w-full"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleLogin}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
