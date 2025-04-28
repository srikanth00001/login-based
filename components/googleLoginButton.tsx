'use client';

import { useEffect } from 'react';

export default function GoogleLoginButton() {
  useEffect(() => {
    console.log('Current Origin:', window.location.origin);
    console.log('Client ID:', process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);
    console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    if (typeof window !== 'undefined' && window.google) {
      try {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleCredentialResponse,
          use_fedcm_for_prompt: false,
          error_callback: (error) => {
            console.error('Google Sign-In error:', error);
            alert(`Google Sign-In failed: ${error.message || 'Unknown error'}`);
          },
        });
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-button')!,
          {
            theme: 'outline',
            size: 'large',
            text: 'signin_with',
            shape: 'rectangular',
            logo_alignment: 'left',
          }
        );
      } catch (error) {
        console.error('Failed to initialize Google Sign-In:', error);
      }
    } else {
      console.error('Google Sign-In library not loaded!');
    }
  }, []);

  const handleCredentialResponse = async (response: any) => {
    console.log('Google Sign-In response:', response);
    const idToken = response.credential;

    if (!idToken) {
      console.error('Google ID token not found');
      alert('Google ID token missing.');
      return;
    }

    console.log('Received Google ID Token:', idToken);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/callback/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: idToken }),
      });

      if (!res.ok) {
        throw new Error(`Failed to authenticate: ${res.statusText}`);
      }

      const data = await res.json();
      console.log('Google login success:', data);
      alert('Login successful!');
    } catch (error) {
      console.error('Google login failed:', error);
      alert('Google login failed. Please try again.');
    }
  };

  return (
    <div className="inline-block rounded-lg bg-gray-100 px-2 py-2 hover:bg-gray-200 transition-colors">
      <div id="google-signin-button"></div>
    </div>
  );
}