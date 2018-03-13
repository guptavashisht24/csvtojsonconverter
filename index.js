const csvFilePath = './customer-data.csv';
const jsonFilePath = './customer-data.json'
const csv=require('csvtojson');
const fs = require('fs');
var json = [];
csv()
.fromFile(csvFilePath)
.on('json',(jsonObj)=>{
    json.push(jsonObj);
})
.on('done',(error)=>{
   fs.writeFile(jsonFilePath, JSON.stringify(json), function(error){
   	if(error)
   		console.log('Error in Writing JSON'+error);
   });
});

