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
    let valueList = {};
    let volumeList = {};
    companyObject = {};
    companyList =[];
    let i = 0;
    let max = 0;
            if(req.path !== '/favicon.ico'){
                console.log(req.path);

                if(req.path == '/10x'){

                    // ************************************************

                    const directorypath = path.join(__dirname, '101');
                fs.readdir(directorypath , function (err, files) {
                if (err) throw err;
                files.forEach( (file) => {
                    let k =0;
                    fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
                    if (err2) throw err2;
                        obj = JSON.parse(data);
                        company.push(file);
                        valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                        max = max < obj['datasets'][1]['values'].length ? obj['datasets'][1]['values'].length : max
                        i++;
                        
                       try{

                        obj2[0] = obj['datasets'][1]['values'][max -1][1];
                        obj2[1] = obj['datasets'][1]['values'][max -2][1];
                       }
                       catch{
                        console.log(file.split('.')[0] );
                        console.log(max);
                       }



                    if((obj2[0]/obj2[1]) > 3){
                    companyObject[file.split('.')[0]] = (obj2[0]/obj2[1]).toFixed(2);
                    }
                    // [...obj2];
                    obj2 =[];

                    if (i == files.length ){
                    obj3 = { "company" : company,
                            "values" : obj2,
                            "valueList" : valueList,
                            "max" : max,
                            "companyObject" : companyObject
                            }
                    res.send(obj3);
                }
                
                });
                
                });
                
                });

                // *************************************************************

                }

                else{
               
                const directorypath = path.join(__dirname, req.path.replace('/', ''));
                fs.readdir(directorypath , function (err, files) {
                if (err) throw err;
                files.forEach( (file) => {
                    fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
                    if (err2) throw err2;
                        obj = JSON.parse(data);
                        company.push(file);

                        valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                        max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                        i++;
                    for (let key in obj['datasets'][0]['values']) {
                        obj2.push(obj['datasets'][0]['values'][key][1]);                           
                    }
                    companyObject[file.split('.')[0]] = [...obj2];
                    obj2 =[];

                    if (i == files.length ){
                    obj3 = { "company" : company,
                            "values" : obj2,
                            "valueList" : valueList,
                            "max" : max,
                            "companyObject" : companyObject
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