
                                                     /*
     
                                                    M- Model          ->SCHEMA(data model where you store data and different entity should have diffrent model)
                                                    V-View            ->UI
                                                    C-Controller      ->Router */

const { application } = require('express');
const express =require('express');
const router =express.Router();
const Alien =require('../models.js/alienSchema.js')

router.get('/',async(req,res)=>{
    try{
        
      const aliens= await Alien.find()
      res.json(aliens)
    }catch(err){
        res.send('error',err)
    }
    

})

router.get('/:id',async(req,res)=>{
    try{
        
      const alien= await Alien.findById(req.params.id)
      res.json(alien)
    }catch(err){
        res.send('error',err)
    }
    

})


router.post('/',async(req,res)=>{
    const alien=new Alien({
        name: req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
   try{
    const a1 =await alien.save()
    res.json(a1)
   }catch(err){
    res.send('error',err)
   }



})

module.exports=router;
