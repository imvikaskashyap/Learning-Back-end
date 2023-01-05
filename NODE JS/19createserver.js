let express  = require('express')
let app = express()

app.get('',(req,res)=>{
    console.log('data sent by brow =>>>',req.query.name)
    res.send('Welcome ' + req.query.name)
})

app.get('/about',(req,res)=>{
    res.send('Hello, this is about page')
})

app.get('/help',(req,res)=>{
    res.send('Hello, this is help page')
})

app.listen(4600)