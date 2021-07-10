var value = 1; 
let enumValue = 100;
let sessionURL = `http://10.10.10.28/cdn-cgi/login/admin.php?content=accounts&id=`

function test(sessionURL, enumValue, value){
    
    for(let i = 1; i <= enumValue; i++){
        let testURL = sessionURL.concat(value)
        console.log(testURL)
        value++
    }
}

test(sessionURL, enumValue, value);
