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
    data: {
        username: creds.username,
        password: creds.password
    }
})
.then((response) => {
    console.log(response)
    console.log('Authenticated!');
}).catch((error) => {
    console.log('error')
});