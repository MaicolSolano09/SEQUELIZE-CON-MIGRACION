//controllador maneja los resultados
const {listarBlockServices}=require("../services/BlockServices")
let listarBlock=async(req,res)=>{
    try{
     let respuesta=await listarBlockServices();
     res.json(respuesta);
    }catch(e){

    }
}
module.exports={
    listarBlock
};