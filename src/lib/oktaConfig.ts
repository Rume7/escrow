export const oktaConfig = {
    clientId: 'xxxxxxxxxxxxx',
    issuer: 'https://dev-xxxxxxxx.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}