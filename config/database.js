module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysql33.mydevil.net'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'm1178_stream404a'),
        username: env('DATABASE_USERNAME', 'm1178_stream404a'),
        password: env('DATABASE_PASSWORD', 'Pmgana921'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
