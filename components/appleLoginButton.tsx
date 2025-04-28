'use client';

import { FaApple } from 'react-icons/fa';
import axios from 'axios';

const AppleLoginButton = () => {
  const handleAppleLogin = async () => {
    const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;

    try {
      if (isApple) {
        const clientId = 'com.example.web';
        const redirectUri = encodeURIComponent('https://c740-2405-201-e015-705d-900b-c1dc-e19d-7cb2.ngrok-free.app/auth/apple/callback');

        const url = `https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=${clientId}&redirect_uri=${redirectUri}&scope=name%20email`;

        window.location.href = url;
      } else {
        // Simulated login for Android or non-Apple platforms
        const res = await axios.post('https://c740-2405-201-e015-705d-900b-c1dc-e19d-7cb2.ngrok-free.app/auth/apple', {
          token: 'mocked-jwt-token',
          email: 'mockedemail@example.com',
          name: 'John Doe',
        });

        console.log('Simulated Apple Login:', res.data);
        alert('Simulated Apple login success:\n' + JSON.stringify(res.data));
      }
    } catch (error) {
      console.error('Apple Login Failed:', error);
      alert('Login failed');
    }
  };

  return (
    <button
      onClick={handleAppleLogin}
      className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer"
    >
      <FaApple className="text-black" />
      Sign in with Apple
    </button>
  );
};

export default AppleLoginButton;
