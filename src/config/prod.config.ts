module.exports = {
    logs: {
        level: 'silly',
    },
    env: 'production',
    server: {
        port: process.env.PORT,
    },
    database: {
        user: process.env.BASEDB_USER || '',
        password: process.env.BASEDB_PASSWORD || '',
        database_name: process.env.BASEDB_NAME || '',
        connectString: process.env.BASEDB_CONNECTSTRING || '',
    },
    jwt: {
        accessTokenSecretKey: process.env.ACCESS_TOKEN_SECRET_KEY,
        accessTokenExpireDate: process.env.ACCESS_TOKEN_EXPIRE_DATE,
    },
};
