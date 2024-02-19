const File =require("../Models/File");


exports.addFile=async(req,res)=>{
   try {
    const {name,email,message}=req.body;
    if(!name || !email || !message){
        return res.status(400).json({
            success:false,
            message:"all fields are mandatory",
        })
    }
    const user = await File.create({
        
        name,
        email,
        message
      })
    return res.status(200).json({
        success:true,
        data:user,
        message:'file created successFully'
    })
   } catch (error) {
    console.log(error.message)
      return res.status(400).json({
        success:false,
        message:"something went wrong during the creating file",
      })
    
   }

}