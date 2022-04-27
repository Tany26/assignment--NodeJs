const router = require('express').Router();
const User = require('../config/model')

// create post request 
router.post('/friends',async(req,res)=>{
    if(!req.body)
    res.status(500).json('message:',"required data");

    if(!req.body.id||!req.body.name)
    res.status(404).json('message:',"required all field");


    const user = new User({
        id:req.body.id,
        name:req.body.name

    });
   const response = await user.save();
   res.status(200).json({'id':response.id,'name':response.name});
})

//Get Friend's by id

router.get('/friends/:id', async(req,res)=>{
    const user = await  User.findOne({id:req.params.id});
    

    if(!user)
    res.status(404).json("message","user not there");

    res.status(200).json({'id':user.id,'name':user.name});
  
})

//Get All Friend's data

router.get('/friends',async(req,res)=>{
    User.find({}, function(err, users) {
        var userMap = []
    
        users.forEach(function(user) {
            
          userMap.push({'id':user.id,'name':user.name});
        });
    
        res.send(userMap);  
      });
});




module.exports = router;