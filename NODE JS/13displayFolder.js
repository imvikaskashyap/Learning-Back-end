const fs = require('fs')
const path = require('path')

const dirPath = path.join(__dirname,'files')

// for (i = 1; i < 5; i++)
// {
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,'hello this is my first Programme')
// }

fs.readdir(dirPath,(err,files)=>{
  //console.log(files[1])
  files.forEach((item)=>{
    console.log(`this is file`,item)
})
})