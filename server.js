const express = require('express');
const fs = require('fs');

const port = process.env.PORT || 5000 ;
const server = express();

server.get('/', (req, res) => res.send("Hey Node"));

server.use( (req, res)=>{
    // console.log(req.path)
            if(req.path !== '/favicon.ico'){
                    let obj;
                        fs.readFile('.' + req.path + '.json', 'utf8', function (err, data) {
                        if (err) throw err;
                        obj = JSON.parse(data);
                        let obj2 = {}
                            for (const key in obj['datasets'][0]['values']) {

                                // console.log(obj['datasets'][0]['values'][key][1]);

                                obj2[key] = obj['datasets'][0]['values'][key][1]

                                    if( ((obj['datasets'][0]['values']).length == Object.keys(obj2).length) || (Object.keys(obj2).length == 10)){
                                        // res.send(obj['datasets'][0]['values'][key][1]);
                                        res.send(obj2);
                                        return;
                                    }                    

                            }
                        
                
                        });
        
    
            }
});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
})