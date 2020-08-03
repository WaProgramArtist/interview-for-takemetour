require('dotenv').config();

const getEnvironmentSpecificconfig = (env: any) => {
    switch (env) {
        case 'development': {
            return require('./dev.config');
        }
        case 'production': {
            return require('./prod.config');
        }
        default: {
            throw new Error(`no matching config file found for env '${env}'`);
        }
    }
};

module.exports = Object.assign(getEnvironmentSpecificconfig(process.env.NODE_ENV));
