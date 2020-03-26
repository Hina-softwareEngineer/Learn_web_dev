const db=require("../models");
const jwt=require("jsonwebtoken");

exports.signin=function(req,res,next){
    // finding a user
    // checking password matches what was sent to server
    // if it all matches
    // log them in
    try{
        let user=await db.User.findOne({
            email:require.body.email
        });
        let {id,username,profileImageUrl}=user;
        let isMatch=await user.comparePassword(req.body.password);
        if(isMatch){
            let token=jwt.sign({
                id,
                username,
                profileImageUrl,
            },
            process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,username,profileImageUrl,token
            });
        }else{
            return next({
                status:400,
                message:"Invalid Email or Password"
            });
        }
    }
    catch(e){
        return next({
            status:400,
            message:"Invalid Email or Password"
        });
    }
};

exports.signup=async function(request,response,next){
    try{
        let user=await db.User.create(request.body);
        let {id,username,profileImageUrl}=user;
        let token=jwt.sign({
            id,
            username,
            profileImageUrl
        },
        process.env.SECRET_KEY
        );
        return response.status(200).json({
                id,
                username,
                profileImageUrl,
                token    
        });
        // create a user
        // create a token (signing a token)
        // process.env.SECRET_KEY
        }
    catch(err){
        if (err.code === 11000){
            err.message="Sorry, that username and / or email is taken";
        }
        return next({
            status:400,
            message:err.message
        });
        // see what kind of error
    }
};