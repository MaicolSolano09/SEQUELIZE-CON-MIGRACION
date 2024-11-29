const {Blocks}=require('../models')
let listarBlockServices=async()=>{
    try{
      let resp=await Blocks.findAll();
      return resp;
    }catch(e){
        console.log(e)
    }
}

module.exports={listarBlockServices};
