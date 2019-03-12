const NODE_ENV = process.env.NODE_ENV || 'develop'

let config = {
  project: 'express-esm-boilerplate',
  version: '0.1',
  port: 8080,
  db: {
    host: 'your db host',
    database: 'dev',
    username: 'dev',
    password: 'password',
    dialect: 'mysql',
    timezone: '+09:00',
    forceSync: false,
    alter: false
  },
  sentry: {
    DSN: ''
  },
  privateKey: 'express-esm-boilerplate',
  header: {
    token: 'x-access-token'
  },
  pagination: {
    defaultPage: 1,
    defaultPageSize: 10
  }
}

if (NODE_ENV == 'public-develop') {
}

if (NODE_ENV == 'production') {
}

export default config
