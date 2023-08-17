import express from "express";
const router = express.Router();
import shows from "../models/shows";
import multer from "multer";

//storage
const Storage = multer.diskStorage({
    destination:'uploadss',
    filename:(req,file,cb)=>{
    cb(null,file.originalname)
    },
})
const upload =multer({
    storage:Storage
})
router.get("/",(req,res)=>{

})
router.post('/',async(req,res)=>{
    const file = req.file
    const newImage= new shows({
    name: req.body.name,
    description: req.body.description,
    image: {
        data:req.file.filename,
        contentType:'image/jpeg'
    },
    rating: req.body.rating,
    venue: req.body.venue,
    time: req.body.time
    })
    newImage.save().then(()=>res.send("Successfully uploaded")).catch(err=>console.log(err))
    
})



export default router