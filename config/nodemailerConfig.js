module.exports = {
    host: process.env.EMAIL_HOST,
    service: process.env.EMAIL_SERVICE,
    secure: process.env.EMAIL_SECURE,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
};