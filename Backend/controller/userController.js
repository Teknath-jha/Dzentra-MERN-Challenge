const  User=require("../model/usermodel");


// user register
exports.register= async(req,res)=>{

    try {
        const {name,email,password} = req.body;

        const user=await User.create({
            name,
            email,
            password
    
        });
        user.save()
        .then(data=>{
            console.log(data);
            res.status(201).json({
                sucess:true,
                user
            })
        }).catch(err=>{
            console.log(err);
            res.status(404).json(err.message);
        })
    
        
    } catch (err)
    {
        console.log(err.message);
        res.status(201).json({err:err.message});
    }
};



// user login with authentication
exports.login= async(req,res)=>{

    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json({
            sucess:false,
            message:"Please Enter Email and Password"
        });
    }

    const user=await User.findOne({email});

    console.log(user);

    if(!user){
        return res.status(404).json({
            sucess:false,
            message:"Invalid credentials"
        });
    }

    if(user.password !== password){
        return res.status(404).json({
            sucess:false,
            message:"Invalid credentials"
        });
    }
    console.log("Loggedin");

    res.status(200).json({
        sucess:true,
        user
    });
};

