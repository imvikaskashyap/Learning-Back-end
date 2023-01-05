let fs = require('fs')

let data =  process.argv

if(data[2]=='add'){
    fs.writeFileSync(data[3],data[4])
}else if (data[2]=='remove'){
    fs.unlinkSync(data[3])
}else{
    console.log('you have entered wrong keyword')
}
