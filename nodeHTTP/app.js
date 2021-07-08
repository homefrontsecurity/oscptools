'use strict';

const axios = require('axios');

let sessionsURL = 'http://10.10.10.28/cdn-cgi/login';

let creds = {
    username: 'admin',
    password: 'MEGACORP_4dm1n!!'
};

console.log(sessionsURL);
console.log(creds);
console.log('Attempting HTTP request');

axios.post(sessionsURL, {}, {
    auth: {
        username: creds.username,
        password: creds.password
    }
})
.then((response) => {
    console.log('Authenticated!');
}).catch((error) => {
    console.log('error')
});