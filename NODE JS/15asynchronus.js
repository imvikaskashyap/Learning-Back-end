console.log('hey bro 1....')

setTimeout(()=>{
    console.log('hey bro 2.....')
},2000)

console.log('hey bro 3.....')

let a = 30
b = 0

setTimeout(()=>{
    b=10;
},2000)

console.log(a+b);

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(46)
    },2000)
})

waitingData.then((data)=>{

    b = data
    console.log(a+b)
})