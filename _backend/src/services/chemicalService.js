const fs = require("fs")
const csv = require('fast-csv')
const model = require('../../models/chemical')
const path = require('path')

class chemicalService{

    //  Bulk insertion of chemical from file
    async addBulkChemical(file){
        try {
          if (file == undefined){
            throw {name : 'ValidationError', details : "Please upload a CSV file", status : 400}
          }
          let chemical = [];
          fs.createReadStream(path.join(__dirname, `../../uploads/${file.filename}`))
            .pipe(csv.parse({ headers : true}))
            .on('error', (e)=> {
                throw e
            })
            .on('data', (item) => {
                chemical.push({
                    id: item.id,
                    name : item.CompoundName,
                    description : item.CompounrDescription,
                    image: item.strImageSource,
                    link: item.strImageAttribution,
                    dateModified : item.dateModified
                })
            })
            .on("end", async ()=> {
                const result = await model.bulkCreate(chemical);
                return result
            })
        }catch(error){
            throw error
          }
    }

    async getAllChemical(page, size){
        try{
            const filter = {
                limit : size,
                offset: (page - 1) * size,
            }
            const result = await model.findAndCountAll(filter);
            return result
        }catch(error){
            throw error
        }
    }

    async getChemialById(id){
        try{
            if(!id){
                throw  {name : 'ValidationError', details : "Please upload a CSV file", status : 400}
            };
            const filter = {
                where : {
                    id : id
                }
            }
            const result = await model.findOne(filter)
            return result
        }catch(e){
            throw e
        }      
    }

    async updateCompound(id, data){
        try{
            if(!id){
                throw  {name : 'ValidationError', details : "Please upload a CSV file", status : 400}
            };
            data.dateModified = new Date();
            const filter = {
                where: {
                    id : id
                }
            }
            const result = await model.update(data , filter);
            return result;
        }catch(e){
            throw e
        }
    }

    async deleteChemical(id){
        try{
            if(!id){
                throw  {name : 'ValidationError', details : "Please upload a CSV file", status : 400}
            };
            const filter = {
                where : {
                    id : id
                }
            };
            const result = await model.destroy(filter);
            return result
        }catch(e){
            throw e
        }
    }

      
}

module.exports = chemicalService