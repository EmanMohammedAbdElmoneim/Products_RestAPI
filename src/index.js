const {app} = require('./app')
const PORT = 8080
const mongoose = require('mongoose')



app.listen(PORT, ()=>{

   mongoose.connect('mongodb+srv://Mina_Ashraf:1234@firstcluster.dccgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
   // mongoose.connect('mongodb://localhost:27017/products')
   .then(()=>{console.log("Connected Successfully")})
   .catch((e)=>{console.error("Failed to Connect " + e)})

   console.log(`Server running on: http://localhost:${PORT}`)
})
