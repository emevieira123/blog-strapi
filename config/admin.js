module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bbacc90b112b2ffcf7763d770d253db5'),
  },
});
