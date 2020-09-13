module.exports = {
    database: {
        name: 'trucks2',
        user: 'crownbus_root',
        pass: 'Ziggie6818',
        host: 'localhost',
        log: true,
        dialect: "mysql",
        port: 3306
    },
    server: {
        port: 3002,
        liveEnvironment: false,
        urlPref: '/api/v1/'
    },
    security: {
        salt: '8j879mXXm98?'
    },
    mysecret: {
        salt: '8j879mXXm98?'
    }
}