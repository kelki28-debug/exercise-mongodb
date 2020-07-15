const User = require('../../models');
const { where } = require('../../models');

module.exports = {
    registerUser: async (req,res) =>{
        const {name, email, password} = req.body;
        try{
             const result = await User.create({
                 name,email,password
             })
             res.send({
                message:'success created',
                result:result
            })
        }
        catch(error){
           
            res.send(error)
        }
    },
    deleteUser: async (req,res) =>{
        const name = req.params;
        try{
            const result = await User.findOneAndDelete(name)
            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    },
    updateUser: async (req,res) =>{
        const {id} = req.params;
        const {name, email, password} = req.body;
        try{
           const result = await User.findByIdAndUpdate(id,{$set:{name,email,password}})
           res.send(result)
        }
        catch(error){
            res.send(error)
        }
    },
    getUser: async (req,res) =>{
       
        try{
            const result = await User.find({
        });
            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    },
    filterUser: async (req,res) =>{
        const {id} = req.params
        try{
            const result = await User.find(
                {_id:id}
            )
            res.send(result)
        }
        catch(error){
            res.send(error)
        }
    }
}