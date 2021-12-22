const router = require("express").Router();
const Movies = require("../model/Movies");
const {verifyToken} = require("../verifyToken");
// const refreshToken = require("../refreshToken");



//CREATE
router.post("/",verifyToken, async(req, res) =>{
  if( req.user.isAdmin){

    const newMovies = new Movies(req.body);

    try {
        const savedMovie = await newMovies.save();
        res.status(201).json(savedMovie);
        
    } catch (err) {
      res.status(500).json(err);  
    }
     
  }else {
      res.status(403).json("You are not allowed!");
  }
})

//UPDATE
router.put("/:id",verifyToken, async(req, res) =>{
    if( req.user.isAdmin){
      try {
          const updaedMovie = await Movies.findByIdAndUpdate(req.params.id, {$set: req.body},{new: true});
          res.status(200).json(updaedMovie);
          
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
           await Movies.findByIdAndDelete(req.params.id);
          res.status(200).json(" the Movie has been deleted!");
          
      } catch (err) {
        res.status(500).json(err);  
      }
       
    }else {
        res.status(403).json({message: "You are not allowed!"});
    }
  })
  
  
//Get
router.get("/find/:id",verifyToken, async(req, res) =>{
      try {
       const movies =  await Movies.findById(req.params.id);
          res.status(200).json(movies);
          
      } catch (err) {
        res.status(500).json(err);  
      }
  })

//GET RANDOM
router.get("/random",verifyToken, async(req, res) =>{
    const type = req.query.type;
    let movie;
    try {
     if(type === "series"){
         movie = await Movies.aggregate([
             {$match: {isSeries: true}},
             {$sample: {size: 1}},
         ]);
     }else{
        movie = await Movies.aggregate([
            {$match: {isSeries: false}},
            {$sample: {size: 1}},
        ]);
     }
     res.status(200).json(movie);
        
    } catch (err) {
      res.status(500).json(err);  
    }
})


//GET ALL MOVIES
router.get("/",verifyToken, async(req, res) =>{
    if( req.user.isAdmin){
      try {
         const movies =  await Movies.find();
          res.status(200).json(movies);
          
      } catch (err) {
        res.status(500).json(err);  
      }
       
    }else {
        res.status(403).json("You are not allowed!");
    }
  })
  

module.exports = router;