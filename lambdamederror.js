// Här är lambda koden (som är typ kopierad av din som du visade på lektionen)
//Errorn verkar ändå vara i något annat än lambda koden.



const https = require('https');
exports.handler = (event, context, callback) =>{
    
    const postData = {
        username: "AWS build status",
        content: event.Records[0].Sns.Message
        };
        
        
        const options = {
            method: 'POST',
            hostname: 'discordapp.com',
            path: '/api/webhooks/766284006718439465/GqbDD8KENAxx5PV7gSie9zRx2N-352WUaqH4dKjAARcHXm9BK18bMbkI6mXKoKnTHJej',
            headers: {
                "Content-Type" : "application/json"
            }
        };
        
        const req = https.request(options,(res)=>{
            let body = '';
            console.log('Status:', res.statusCode);
            console.log('Headers', JSON.stringify(res.headers));
            
            res.setEncoding('utf8');
            res.on('data', (chunk) => body += chunk);
            res.on('end',() => {
                console.log('Successfully processed HTTPS response');
                
                if(res.headers['content-type'] === 'application/json'){
                    body = JSON.parse(body);
                }
                callback(null,body);
            });
        });
        req.on('error',callback);
        req.write(JSON.stringify(postData));
        req.end();
};
           

//Här är error messagen

/*{
    "errorType": "TypeError",
    "errorMessage": "Cannot read property '0' of undefined",
    "stack": [
        "TypeError: Cannot read property '0' of undefined",
        "    at Runtime.exports.handler (/var/task/index.js:6:31)",
        "    at Runtime.handleOnce (/var/runtime/Runtime.js:66:25)"
    ]
}*/