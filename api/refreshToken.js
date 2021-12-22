
const jwt = require("jsonwebtoken");

 let refreshTokenes =[];

function refreshToken(req, res, next){
 const refreshToken = req.headers.token;
  if(!refreshToken || !refreshTokenes.includes(refreshToken)){
      const refreshTokens = refreshToken.split(" ")[1];

      jwt.verify(refreshTokens,process.env.SECRET_KEY, (err, user)=>{
          if(err) {
              const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY, {expiresIn: "2d"});
              return res.status(201).json(accessToken);
          }
         refreshTokenes.push(refreshTokens);
          req.user = user;
          next();
      } )
  }else{
      res.status(401).json( {message: "You are not authenticated!"});
  }
}


module.exports= refreshToken;