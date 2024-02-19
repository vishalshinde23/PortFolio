const mongoose=require("mongoose");
const nodemailer=require('nodemailer');


const fileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
})

fileSchema.post('save',async function(doc){

    const transporter= nodemailer.createTransport({
        host:process.env.MAIL_HOST,
        auth:{
            user:process.env.MAIL_USER,
            pass:process.env.MAIL_PASS,

        }

    })

    let info=await transporter.sendMail({
        from:doc.email,
        to:process.env.MAIL_USER,
        subject:'contact for portfolio',
        html:`<h2>hello vishal </h2> this is message from <h3>${doc.email}</h3>
        <p>${doc.message}</p>`
    })
    // console.log("info",info);
})

module.exports=mongoose.model("File",fileSchema)