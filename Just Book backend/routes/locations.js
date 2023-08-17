import express from "express";
const router = express.Router();
import Location from '../models/locations';

router.post("/",async(req,res)=>{
    console.log("posting data")
    
    try{
        const location = await Location.find({name:req.body.name})
        //if(!location){
        const newLocation = new Location(req.body)
        console.log(newLocation)
        const saveLocation = await newLocation.save()
        res.status(200).json(saveLocation)
       
        // else{
        //     res.status(401).json({
        //         message: " location already present"
        //     })
        // }
    }catch(err){
        res.status(500).json(err)
    }
})
router.get("/",async(req,res)=>{
    try{
    const AllLocations = await Location.find()
    .populate({
        path: "Audis",
        populate:{path:"shows",model:"Shows"}
    })
    // .populate({
    //     path: "Shows",
    // })

    // const order = await Order.findById(req.params.id)
	// 		.populate("user", "name")
	// 		.populate({
	// 			path: "orderItems",
	// 			populate: { path: "product", model: "Product", populate: { path: "category", model: "Category" } },
	// 		})
	// 		.exec();
    res.json(AllLocations)
    }catch(err){
        res.json(err)
    }
})

//to export
export default router