'use strict';
const axios = require('axios');

axios.get('https://espn.com')
    .then((response) => {
        console.log(response.data);
});