export default {
    apiUrl: process.env.NODE_ENV === 'production'
      ? 'https://my-wealth-auth-service.herokuapp.com/api' : 'https://my-wealth-auth-service.herokuapp.com/api',
  };
