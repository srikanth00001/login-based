'use client';

import { useEffect } from 'react';

export default function GoogleLoginButton() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.initialize({
        client_id: '285066937903-45500frg3r9r53jb1ng3va1ksebikr4u.apps.googleusercontent.com',
        callback: handleCredentialResponse,
      });
    } else {
      console.error('Google Sign-In library not loaded!');
    }
  }, []);

  const handleCredentialResponse = async (response: any) => {
    const idToken = response.credential;

    if (!idToken) {
      console.error('Google ID token not found');
      return;
    }

    console.log("Received Google ID Token:", idToken);

    try {
      const res = await fetch('https://2ed9-2405-201-e015-707b-75db-dd0d-957f-ff3d.ngrok-free.app/api/auth/callback/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken }),
      });

      if (!res.ok) {
        throw new Error('Failed to authenticate');
      }

      const data = await res.json();
      console.log('Google login success:', data);
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    }
  };

  const handleManualClick = () => {
    if (typeof window !== 'undefined' && window.google) {
      window.google.accounts.id.prompt();
    } else {
      console.error('Google Sign-In library not loaded!');
    }
  };

  return (
    <button
      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-100 px-4 py-2 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer"
      onClick={handleManualClick}
    >
      <img
        src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
        alt="Google Logo"
        className="w-5 h-5"
      />
      Sign in with Google
    </button>
  );
}
