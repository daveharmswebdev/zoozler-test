// Update with your config settings.

module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/zoozler_todos_test',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/zoozler_todos',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  }
};
