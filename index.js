const express = require('express')
const PORT = 3000
const app = express()

let arr=
[
    {"id": 1, "name": "Aytac", "age": 10 },
    {"id": 2, "name": "Fidan", "age": 11 },
    { "id": 3,"name": "Cinare", "age": 12 },

  ]
  app.get('/', function (req, res) {
    res.send(arr );
  });
app.listen(PORT,(error)=>{
    if(!error){
        console.log(`server is running on the port ${PORT}`)
    }
    else{
        console.log('error happened')
    }

})