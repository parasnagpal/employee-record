const express=require('express')
const app=express()


const mongofns=require ('./mongo.js')


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/views/employees.html')
})



app.use(express.static(__dirname+'/views'))

app.use(express.urlencoded({
    extended: true
  }))
  app.use(express.json())


app.post('/insert',(req,res)=>{
   if(req.body.firstname) 
    mongofns.insertOne(req.body)
   res.send('done')
})

let name
app.post('/myname',(req,res)=>{
    name=req.body.name
})

app.get('/getemployees',(req,res)=>{
    
    async function get(){
     await mongofns.getEmployees(res)
    }
    get()
   // res.send('Hello')
})

app.listen(3000,()=>{
    console.log('Listening at 3000')
})