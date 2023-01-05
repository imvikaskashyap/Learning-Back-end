let express = require('express')
let app = express()

app.get('',(req,resp)=>{
    resp.send(`<h1>Welcome, to home page</h1> <a href ='./about'>Go to About</a> `)
})

app.get('/about',(req,resp)=>{
    resp.send(
        `Welcome,  ${req.query.name} <input = '' placeholder = 'user name' value = '${req.query.name}'> <button> Go <button> <a href ='./help'> Go to help</a>`
        )
})

app.get('/help',(req,resp)=>{
    resp.send(
        [
            {
                name:'vikas kashyap',
                email:'vkboss@gmail.com',
                contact: 9627612850
            },

            {
                name:'rahul kashyap',
                email:'rkashyap@gmail.com',
                contact: 8630291957
            },

            {
                name:'vikas kashyap',
                email:'skashyap@gmail.com',
                contact: 8928159397
            }
        ]
    )
})

app.listen(4600)