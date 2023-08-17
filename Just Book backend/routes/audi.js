import express from "express";
import Audi from "../models/audi"
const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        console.log("vastunna ")
        const AllLocations = await Audi.find()
        .populate({
            path: "shows",
        })
        console.log(AllLocations)
        res.json(AllLocations)
        }catch(err){
            res.json(err)
        }
})
router.post("/",async(req,res)=>{
    console.log("posting data")
    const newAudi = new Audi({
        name:req.body.name,
        shows:req.body.shows
    })
    try{
        const saveLocation = await newAudi.save()
        res.status(200).json(saveLocation)
    }catch(err){
        res.status(500).json(err)
    }
})
//router.post("")
//to export
export default router