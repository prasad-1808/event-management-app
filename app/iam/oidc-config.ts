const oidcConfig = {
  authority: 'http://localhost:8180/realms/myrealm',
  client_id: 'react-client',
  redirect_uri: 'http://localhost:5173/',
  scope: 'openid profile email',
  response_type: 'code',
  response_mode: 'fragment'
};

export default oidcConfig;