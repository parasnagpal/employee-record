const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
function insertOne(data)
{
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const employees = db.collection('employees')
  employees.insertMany([data])

  client.close();
});
}

function getEmployees(res){
    let data
   // Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
   
    const db = client.db(dbName);
    const employees = db.collection('employees')
    employees.find({}).toArray((err,results)=>{
        console.log(results)
        res.send(results)
    })
    client.close();
  }); 
  
}
module.exports={
    insertOne,
    getEmployees
}