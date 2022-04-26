const {app} = require('./app')
const PORT = 3000
const mongoose = require('mongoose')



app.listen(
    PORT,async ()=>{
       await mongoose.connect('mongodb+srv://Mina_Ashraf:1234@firstcluster.dccgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
       }
    , console.log(`Server running on http://localhost:${PORT}`))

