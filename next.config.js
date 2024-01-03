const path = require('path');

module.exports = {
    // Other configurations...
    webpack: (config, { isServer }) => {
        config.resolve.alias['@'] = path.resolve(__dirname, '.');

        return config;
    },
};
