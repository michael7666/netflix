const router = require("express").Router();
const Lists = require("../model/Lists");
// const refreshToken = require("../refreshToken");
const {verifyToken} = require("../verifyToken");



//CREATE
router.post("/",verifyToken, async(req, res) =>{
  if( req.user.isAdmin){

    const newMLists = new Lists(req.body);

    try {
        const savedList = await newMLists.save();
        res.status(200).json(savedList);
        
    } catch (err) {
      res.status(500).json(err);  
    }
     
  }else {
      res.status(403).json("You are not allowed!");
  }
})

//Delete
router.delete("/:id",verifyToken, async(req, res) =>{
    if( req.user.isAdmin){
      try {
         await Lists.findByIdAndDelete(req.params.id);
          res.status(200).json("Movie List has been deleted!");
          
      } catch (err) {
        res.status(500).json(err);  
      }
       
    }else {
        res.status(403).json("You are not allowed!");
    }
  })
//GET
router.get("/",verifyToken, async(req, res) =>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let lists = [];
    
      try {
        if(typeQuery){
            if(genreQuery){
                lists = await Lists.aggregate([{$sample: {size: 10}},{$match: {type: typeQuery, genre: genreQuery}}]);
            }else{
                lists = await Lists.aggregate([{$sample: {size: 10}},{$match: {type: typeQuery}}]);
            }
        }else {
            lists = await Lists.aggregate([{$sample: {size: 10}}]);
        }
      
       res.status(200).json(lists);    
      } catch (err) {
        res.status(500).json(err);  
      }
  })
module.exports = router;