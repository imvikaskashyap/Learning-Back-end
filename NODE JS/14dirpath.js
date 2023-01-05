const fs = require('fs')
const path = require('path')

const dirpath = path.join(__dirname,'crud')
const filepath = `${dirpath}/appl.txt`

// 1 point
fs.writeFileSync(filepath,'this is a empty file')

// 2. point
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})

// 3. point
fs.appendFile(filepath,' and this file name is apple',(err)=>{
    if(!err) console.log('file is updated')
})

// 4. point
fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if(!err) console.log('file name is updated')
})





fs.unlinkSync(`${dirpath}/fruit.txt`)