import { FaMicrosoft } from 'react-icons/fa';

const MicrosoftLoginButton = () => {
  const clientId = '96823082-e8b7-4c2a-84e3-c4fefab5090d';
  const tenantId = 'd2408d49-35c3-4baf-a889-f417764eae80';
  const redirectUri = encodeURIComponent(
    'https://2ed9-2405-201-e015-707b-75db-dd0d-957f-ff3d.ngrok-free.app/auth/microsoft/callback'
  );
  const scope = encodeURIComponent('openid profile email offline_access User.Read');

  const handleLogin = () => {
    const microsoftLoginUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
      `?client_id=${clientId}` +
      `&response_type=code` +
      `&redirect_uri=${redirectUri}` +
      `&response_mode=query` +
      `&scope=${scope}`;

    window.location.href = microsoftLoginUrl;
  };

  return (
    <button
      onClick={handleLogin}
      className="flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm cursor-pointer"
    >
      <FaMicrosoft className="text-black" />
      Sign in with Microsoft
    </button>
  );
};

export default MicrosoftLoginButton;
