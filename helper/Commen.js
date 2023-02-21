const jwt = require('jsonwebtoken');
class Commen{
    constructor(){}

    uploadImage(imageInfo){
        return new Promise(function (resolve, reject) {
            // console.log("imageInfo", imageInfo);
            let imageName = imageInfo.name;
            // console.log("imageName", imageName);
            const imageNameArr = imageName.split(".");
            // console.log("imageNameArr", imageNameArr);
            const imageExt = imageNameArr.splice(-1).toString();
            // console.log("imageExt", imageExt);
            const currentDate = new Date().getTime();
            // console.log("currentDate", currentDate);
            const imageNewName = currentDate + "___" + Math.round(Math.random(1111, 99999) * 10000) + "___." + imageExt;
            // console.log("imageNewName", imageNewName);
            const uploadPath = __dirname + "/../public/images/products/" + imageNewName;
            imageInfo.mv(uploadPath, function (error) {
                if (error) {
                    let info = {
                        message: "Error while uplode image",
                        details: error,
                    }
                    reject(info)
                } else {
                    resolve(imageNewName)
                }
            });
        })
    };

    validateToken(req,res,next){
        if(req.headers.authorization){
           console.log('req.headers',req.headers);
           let token = req.headers.authorization.split(' ').splice(-1).toString();
           console.log("token",token);
           jwt.verify(token , process.env.JWT_PRIVATE_KEY , function(error,decoded){
                if(error){
                    res.statusCode = 401;
                    let response = {
                        message:"Invalid Token"
                    };
                    res.json(response);
                }else{
                    console.log('decoded',decoded);
                    req.userId = decoded.userData;
                    next();
                }
           }) 
        }else{
            res.statusCode = 401;
            let response = {
                message:"please provide a valid token"
            };
            res.json(response);
        }
    
    };

}
module.exports = new Commen();