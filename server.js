const express = require('express');
const fs = require('fs');
const path = require('path');


const port = process.env.PORT || 5000 ;
const server = express();

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/index.html'));

});

server.get('/sector', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/sector.html'));

});

server.get('/compare', (req, res) => {
    res.sendFile(path.join(__dirname, './pages/compare.html'));

});
        
server.use( (req, res)=>{
    let obj ={};
    let obj2 = [];
    let company =[];
    let obj3 = {};
    let valueList = {};
    let volumeList = {};
    let companyObject = {};
    let companyList =[];
    
    
    let max = 0;
    let  companyObject2 ={};



if(req.path !== '/favicon.ico'){
console.log(req.path);
 if(req.path == '/10x'){
        let j = 0;
        let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src'));

                foldersPath.forEach( (folder, j) => {

                    const directorypath = path.join(__dirname, 'src/' + folder);
                    fs.readdir(directorypath , function (err, files) {
                    if (err) throw err;
                    files.forEach( (file, i) => {
                        
                            fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
                            if (err2) throw err2;
                            obj = JSON.parse(data);
                            company.push(file);
                            valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                            max = max < obj['datasets'][1]['values'].length ? obj['datasets'][1]['values'].length : max
                            try{
                                obj2[0] = obj['datasets'][1]['values'][max -1][1];
                                obj2[1] = obj['datasets'][1]['values'][max -2][1];
                            }catch{ }
                                    if((obj2[0]/obj2[1]) > 3){
                                    companyObject[file.split('.')[0]] = (obj2[0]/obj2[1]).toFixed(2);
                                    }

                                    if( j == foldersPath.length -1 && i == files.length -1){
                                    obj3 = { 
                                    "companyObject" : companyObject
                                    }
                                    res.send(obj3);
                                    }

        });   });  });  })


}

else if(req.path.includes('getcompare')) {

    const directorypath = path.join(__dirname, 'SectorData');
    fs.readFile(path.join(directorypath , 'Comparison.json'), 'utf8', function (err2, data) {
        if (err2) throw err2;
        // console.log(data);
        obj = JSON.parse(data);
        res.send(data);
    });
}

else if(req.path.includes('+')) {
    let companies = req.path.replace('/',"").split('+');

    let j = 0;
    let c= 0;
    let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src'));

for(let k = 0; k < companies.length; k++){ 

foldersPath.forEach( (folder, j) => {

const directorypath = path.join(__dirname, 'src/' + folder);
fs.readdir(directorypath , function (err, files) {
if (err) throw err;

files.forEach( (file, i) => {
if(file.split('.')[0] == companies[k]){
console.log(file + "    " +  companies[0]);
c++;


fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
if (err2) throw err2;
obj = JSON.parse(data);
if(obj['datasets'].length > 0 ){
company.push(file);

valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
for (let key in obj['datasets'][0]['values']) {
obj2.push(obj['datasets'][0]['values'][key][1]);                           
}
companyObject[file.split('.')[0]] = [...obj2];
obj2 =[];
}
if (k == companies.length -1 ){
obj3 = { "company" : company,
"values" : obj2,
"valueList" : valueList,
"max" : max,
"companyObject" : companyObject
}
res.send(obj3);
k++;
}

});
}

});

});
});  

}

}

else if(req.path == '/All') {
    let j = 0;
    let k = 0;
    let foldersPath = fs.readdirSync(path.resolve(__dirname, 'src/sector/'));

    // console.log(foldersPath);

    foldersPath.forEach( (folder, j) => {

        
    const directorypath = path.join(__dirname, 'src/sector/' + folder);

    // const directorypath = path.join(__dirname, req.path.replace('/', 'src/').replaceAll('%20', ' '));
    fs.readdir(directorypath , function (err, files) {
    if (err) throw err;
    files.forEach( (file, i) => {
        k++;
        fs.readFile(path.join(directorypath , file), 'utf8', function (err2, data) {
        if (err2) throw err2;
            obj = JSON.parse(data);
            company.push(file);
     if(obj['datasets'].length > 0 ){
            valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
            max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
        for (let key in obj['datasets'][0]['values']) {
            obj2.push(obj['datasets'][0]['values'][key][1]);                           
        }
        companyObject[file.split('.')[0]] = [...obj2];
        obj2 =[];
    }
        if ( folder == 'Tyres' && i == 1){
            console.log(folder + " " + i );
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
});  
}


else{
const directorypath = path.join(__dirname, req.path.replace('/', 'src/').replaceAll('%20', ' '));
           console.log(directorypath    );     
fs.readdir(directorypath , function (err, files) {
                if (err) throw err;
                files.forEach( (file, i) => {

                fs.readFile(path.join(directorypath , file), 'utf8', 
                function (err2, data) {
                if (err2) throw err2;
                obj = JSON.parse(data);

                company.push(file);
                if(obj['datasets'].length > 0 ){
                    valueList[file.split('.')[0]] = obj['datasets'][0]['values'].length
                    max = max < obj['datasets'][0]['values'].length ? obj['datasets'][0]['values'].length : max
                    for (let key in obj['datasets'][0]['values']) {
                    obj2.push(obj['datasets'][0]['values'][key][1]);                           
                    }
                    companyObject[file.split('.')[0]] = [...obj2];
                    obj2 =[];
            }
                if (i == files.length -1 ){
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