require('dotenv').config();

const config = {
    server:{
        PORT : process.env.PORT,
        ENV : process.env.ENV
    },

}


module.exports = config;