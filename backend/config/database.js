const mongoose=require("mongoose");
require('dotenv').config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlparser: true,
        useUnifiedTopology: true

})
.then(()=>console.log('DataBase connection successFull')).catch((error)=>{
    console.log(`DB Connection Failed`);
			console.log(error);
			process.exit(1);
})
}