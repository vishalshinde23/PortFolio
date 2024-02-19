import {apiConnector} from "./apiConnector";
import toast from 'react-hot-toast'

const api=process.env.REACT_APP_URL

export const addFile=async({name,email,message})=>{
    const toastId=toast.loading("Loading");
    let result=null
    try{
      let res=await apiConnector("POST",api,{
        name,email,message
      })
      console.log("create user api Response...",res)
      if(!res?.data?.success){
          throw new Error("Could Not send message");
      }
     toast.success("message sended SuccessFully")
  
    }catch(error){
     console.log("SEND MESSAGE ERROR.....",error)
     toast.error(error.message)
    }
    toast.dismiss(toastId);
  }
