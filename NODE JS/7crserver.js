const http = require('http')

// function open (req,resp) 
// {   resp.write('i m  Vikas kashyap')
//     resp.end()
// }

// const open = (req,resp) =>
//    { resp.write('this is Vikas kashyap')
//     resp.end()
// }

// http.createServer(open).listen(4700)

http.createServer((req,resp) =>{
    resp.write('<h1>hi this is Vikas kashyap</h1>')
    resp.end();
}).listen(4500)

// arrow funcation


// function add (a){
//     return a+100
// }

// const jod = (a) => a+200

// let x = add(100)
// let y = jod(100)

// console.log(x)

// console.log(y)

