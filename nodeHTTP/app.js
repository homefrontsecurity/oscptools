'use strict';
const axios = require('axios');

axios.get('https://espn.com', {withCredentials: true})
    .then((response) => {
        console.log(response.headers);
});