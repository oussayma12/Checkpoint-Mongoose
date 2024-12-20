const express=require("express")
const router =express.Router
const User=require("../models/contactSchema")

router.post("/createUser",async(req,res)=>{
    try {
        const newUser=new User(req.body)
        await newUser.save()
        res.status(201).json({msg:"user created",user:newUser })
    } 
    catch (error)
     {res.status(500).json({msg:error.msg})
        
    }
}

)
router.get("/getUser", async (req,res) => {
    try {
        const user = await User.find()
        res.status(201).json({msg:"user found" , user:user})
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }
})



router.get("/User/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(201).json({msg:"find user" , user:user})
        if(!newUser) 
            return res.status(404).json({msg:"user not found"})
    } catch (error) {
        res.status(500).json({msg:error.msg})
        
    }
})


router.put("/User/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id);
        res.status(201).json({ msg: "User updated successfully", user: updatedUser });
        if (!updatedUser) 
            return res.status(404).json({ msg: "User not found" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});



router.delete("/User/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: "User deleted successfully", user: deletedUser });
        if (!deletedUser)
            return res.status(404).json({ msg: "User not found" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

module.exports = router