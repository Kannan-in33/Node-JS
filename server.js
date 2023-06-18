const express = require('express');
const fs = require('fs');
const path = require('path');


const port = process.env.PORT || 5000 ;
const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/index.html'));

});

        // res.send("Hey Dude");
        // return;

server.use( (req, res)=>{
    let obj ={};
    let obj2 = [];
    let company =[];
    let obj3 = {};
    let i = 0;
            if(req.path !== '/favicon.ico'){
                console.log(req.path);
                        if(req.path == '/k'){        
                                    const directorypath = path.join(__dirname, 'src');
                                    fs.readdir(directorypath , function (err, files) {
                                        if (err) throw err;
                                        files.forEach( (file) => {
                                            fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
                                                if (err2) throw err2;
                                                obj = JSON.parse(data);
                                                i++;
                                                // res.send(obj['datasets'][0]['values']);
                                                for (let key in obj['datasets'][0]['values']) {
                                                    obj2.push(obj['datasets'][0]['values'][key][1]);

                                                }
                                                if (i == files.length){  
                                                    console.log(obj2.length / files.length); 
                                                    res.send(obj2);
                                                }

                                            });

                                        });

                                    });
                                }

                        if(req.path == '/company'){        
                        const directorypath = path.join(__dirname, 'src');
                        fs.readdir(directorypath , function (err, files) {
                                    if (err) throw err;
                                    files.forEach( (file) => {
                                        obj2.push(file);
                                        });
                                        if(obj2.length > 0){
                                            res.send(obj2);
                                        }
                                            
                                        });

                                    };


                        if(req.path == '/g'){        
                            const directorypath = path.join(__dirname, 'src');
                            fs.readdir(directorypath , function (err, files) {
                            if (err) throw err;
                            files.forEach( (file) => {
                            fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
                            if (err2) throw err2;
                                obj = JSON.parse(data);
                                company.push(file);
                            i++;
                            for (let key in obj['datasets'][0]['values']) {
                                obj2.push(obj['datasets'][0]['values'][key][1]);                            
                            }
                            if (i == files.length ){
                            obj3 = { "company" : company,
                                    "values" : obj2
                                    }
                            res.send(obj3);
                            }
                            
                            });
                            
                            });
                            
                            });
                        }
                        
                    
            }

});

server.listen(port, () => {
    console.log('Server is listening on port ' + port);
    
})