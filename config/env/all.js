// default app configuration
const port = process.env.PORT || 4000;
let dbuser="fakedbuser";
let dbpassword ="SecurePassw0rd";
let db = process.env.MONGODB_URI || `mongodb://${dbuser}:${dbpassword}@localhost:27017/nodegoat`;

module.exports = {
    port,
    db,
    cookieSecret: "session_cookie_secret_key_here",
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256",
    hostName: "localhost",
    gcpApiKey: "AIzaSyD5lZNo4dronRnMDsPlcgKc4jaSPpQAW1A",

    environmentalScripts: []
};

