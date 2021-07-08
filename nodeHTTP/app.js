'use strict';

const axios = require('axios');

let sessionsURL = '10.10.10.28/cdn-cgi/login';

let creds = {
    username: 'admin',
    password: 'MEGACORP_4dm1n!!'
};

axios.post(sessionsURL, {}, {
    auth: {
        username: creds.username,
        password: creds.password
    }
})
.then((response) => {
    console.log('Authenticated!');
}).catch((error) => {
    console.log(error)
});