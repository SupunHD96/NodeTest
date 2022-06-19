import 'dotenv/config';

const env = {

    port : process.env.PORT,
    environment : process.env.NODE_ENV,
    dbpath: process.env.DB_PATH,
    jwt: process.env.JSON_SECRET

}

export default env;