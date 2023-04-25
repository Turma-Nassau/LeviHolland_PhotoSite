//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://pedpytsj:Bo_VUpV-OtqF7tQvVwMc5tMmzXaqQsDP@motty.db.elephantsql.com/pedpytsj',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
