const router = require('express').Router();
const ChemicalService = require('../services/chemicalService')
const chemicalService = new ChemicalService()
const errorHandler = require('../../utils/errorHandler')
const fileHandler = require('../../utils/fileUpload');
const updatevalidation = require('../../utils/middleware/middleware')
const validateRequestPayload = require('../../utils/middleware/schemaValidation')
//  bulk upload chemical 
router.post('/Bulk',fileHandler.single('file'),async (req,res)=> {
    try{
        const file = req.file;
        const result = await chemicalService.addBulkChemical(file);
        return res.status(200).send({msg : "Data Inserted Successfully", details : result})
    }catch(error){
        console.log("Error occured while bulk inserting chemical",error);
        const Error = errorHandler(error);
        return res.status(Error.status).json(Error.details);
    }
})

//  get ALL COMPOUNDS
router.get('/',async (req,res)=>{
    try{
        const page = req.query.page ? +req.query.page : 1;
        const size = req.query.size ? +req.query.size : 10;
        const result = await chemicalService.getAllChemical(page, size)
        return res.status(200).send({msg:"Successfully found data", details: result})
    }catch(e){
        console.log(e)
        const Error = errorHandler(error);
        return res.status(Error.status).json(Error.details);
    }
})

//  get compound by id

router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await chemicalService.getChemialById(id);
        return res.status(200).send({msg: "Successfully get the details", details : result})
    }catch(e){
        console.log(e)
        const Error = errorHandler(error);
        return res.status(Error.status).json(Error.details);
    }
})

//  update copound details for specific id
router.patch("/:id", validateRequestPayload(updatevalidation), async (req,res)=>{
    try{
        const {id} = req.params;
        const {body} = req;
        const result = await chemicalService.updateCompound(id, body);
        return res.status(201).send({msg: "Successfully update the details", details : result})
    }catch(e){
        console.log(e)
        const Error = errorHandler(error);
        return res.status(Error.status).json(Error.details);
    }
})

// delelte compound with specific id
router.delete("/:id", async (req,res)=> {
    try{
        const {id} = req.params;
        const result = await chemicalService.deleteChemical(id);
        return res.status(201).send({msg: "Successfully deleted the details", details : result})
    }catch(e){
        console.log(e)
        const Error = errorHandler(error);
        return res.status(Error.status).json(Error.details);
    }
})

module.exports = router

