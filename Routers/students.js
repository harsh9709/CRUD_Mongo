
                                                     /*
     
                                                    M- Model          ->SCHEMA(data model where you store data and different entity should have diffrent model)
                                                    V-View            ->UI
                                                    C-Controller      ->Router */

const { application } = require('express');
const express =require('express');
const router =express.Router();
const Student =require('../models.js/studentSchema.js')

router.get('/',async(req,res)=>{
    try{
        
      const students= await Student.find()
      res.json(students)
    }catch(err){
        res.send('error',err)
    }
    

})

router.get('/:id',async(req,res)=>{
    try{
        
      const student= await Student.findById(req.params.id)
      res.json(student)
    }catch(err){
        res.send('error',err)
    }
    

})


router.post('/',async(req,res)=>{
    const student=new Student({
        name: req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })
   try{
    const a1 =await student.save()
    res.json(a1)
   }catch(err){
    res.send('error',err)
   }



})

module.exports=router;
