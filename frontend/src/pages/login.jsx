import { useState } from 'react';
import { Link } from "react-router-dom"

function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');
  const [nav, setNav] = useState('')


  return (
    <div className="my-10 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">

        <div className="flex border-b mb-6">
          <button className={`px-4 py-2 w-1/2 text-center font-semibold transition duration-300 ${activeTab === 'login'? 'border-b-2 border-black text-black shadow': 'text-gray-500'} hover:bg-[#582E5E] hover:text-white`} onClick={() => setActiveTab('login')}>
            Login
          </button>
          <button className={`px-4 py-2 w-1/2 text-center font-semibold transition duration-300 ${activeTab === 'signup' ? 'border-b-2 border-black text-black shadow' :'text-gray-500 hover:bg-[#582E5E] hover:text-white checked:hover:bg-[#582E5E]'}`} onClick={() => setActiveTab('signup')}> Signup
          </button>
        </div>

        {activeTab === 'login' ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login', { email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-2">Login</h2>
      <p className="text-gray-600 mb-4">Please enter your credentials to continue.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Enter your password"
          required
        />
      </div>
      <Link to='/home'>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
        >
          Login
        </button>
      </Link>
    </form>
  );
}

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup', { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-2">Signup</h2>
      <p className="text-gray-600 mb-4">Create an account to get started.</p>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Enter your username"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-200"
          placeholder="Enter your password"
          required
        />
      </div>
      {email === 'yashtapre77@gmail.com' ? setNav('/home'):setNav('')}
      <Link to={nav}>
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
        >
          Signup
        </button>
      </Link>
    </form>
  );
}

export default AuthTabs;
