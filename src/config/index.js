const {
  APP_NAME,
  NODE_ENV,
  SRV_PORT,
  SRV_HOST,
  DB_PROTOCOL,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  USER_SERVICE,
} = process.env;

let credentials = '';

if (DB_USER && DB_PASSWORD) {
  credentials = `${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@`;
}

const BasicConfiguration = {
  App: {
    NAME: APP_NAME || 'sample-service',
    PORT: SRV_PORT || 3001,
    HOST: SRV_HOST || 'localhost',
    ENV: NODE_ENV || 'development',
  },
  MongoDBSettings: {
    url: `${DB_PROTOCOL}://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}:${DB_PORT}/${DB_NAME}` || 'mongodb://localhost/bbd-auth-bak',
    host: DB_HOST || 'mongodb://localhost/books-user-service ',
  },
  Services: {
    USER_SERVICE,
  },
};

module.exports = Object.freeze(BasicConfiguration);
