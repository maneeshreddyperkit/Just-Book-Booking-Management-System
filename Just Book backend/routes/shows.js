import express from "express";
const router = express.Router();
import shows from "../models/shows";
import Location from "../models/locations";
import Audi from "../models/audi";
import multer from "multer";

const FILE_TYPE_MAP = {
    //MIME type
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg",
};
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // to check if user is uploading correct filetype or not if not throw an error
        const isValid = FILE_TYPE_MAP[file.mimetype];
        let uploadError = new Error("invalid image type");

        if (isValid) {
            uploadError = null;
        }

        cb(uploadError, "public/uploads/");
    },
    filename: function (req, file, cb) {
        //const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const fileName = file.originalname.split(" ").join("-");
        const extension = FILE_TYPE_MAP[file.mimetype];
        cb(null, `${fileName}-${Date.now()}.${extension}`);
    },
});

router.get("/:id", async (req, res) => {
    const show = await shows.findById(req.params.id);
    if (!show) {
        return res.status(404).json("show not found");
    }
    // Send response in here
    return res.status(200).send(show);
});

const uploadOptions = multer({ storage: storage });
router.post("/", uploadOptions.single("image"), async (req, res) => {
    try {
        // if user send wrong category id
        // to validate if the category send by user exist or not

        // to hit request only if product image is uploaded
        const file = req.file;
        if (!file) {
            return res.status(400).send("No image in the request");
        }

        const imageFileName = req.file.filename;
        const baseUrl = `${req.protocol}://${req.get("host")}/public/uploads/`;
        // this baseUrl is to display image on frontend we need image url
        // --> "http://localhost:3000/public/uploads/image-2021101923.jpeg"
        const newShow = new shows({
            name: req.body.name,
            rating: req.body.rating,
            description: req.body.description,
            venue: req.body.venue,
            time: req.body.time,
            date: req.body.date,
            image: `${baseUrl}${imageFileName}`, //"http://localhost:3000/public/uploads/image-2021101923.jpeg"
        });

        const createShow = await newShow.save();

        if (!createShow) {
            return res.status(500).send({ msg: "the product can not be created" });
        }
        const showId = createShow._id;
        let audiId;

        const audis = await Audi.find();
        const audiExists = audis.filter((audi) => audi.name === req.body.audi);
        if (audiExists.length != 0) {
            const updatedAudi = await Audi.findOneAndUpdate(
                { _id: audiExists[0].id },
                {
                    $set: {
                        shows: [...audiExists[0].shows, showId],
                    },
                },
                {
                    upsert: true,
                    returnDocument: "after", // this is new !
                }
            );
            await updatedAudi.save();
            audiId = updatedAudi._id;
        } else {
            const newAudi = new Audi({
                name: req.body.audi,
            });
            newAudi.shows = [showId];
            const saveAudi = await newAudi.save();
            audiId = saveAudi._id;
        }

        const locations = await Location.find();
        const locationExist = locations.filter((loc) => loc.name === req.body.location);
        if (locationExist.length == 0) {
            const newLocation = new Location({ name: req.body.location });
            newLocation.Audis = [audiId];
            await newLocation.save();
        } else {
            if (audiExists.length != 0) {
                const updatedLocationAudi = await Location.findOneAndUpdate(
                    { _id: locationExist[0].id },
                    {
                        $set: {
                            Audis: [...locationExist[0].Audis, audiId],
                        },
                    },
                    {
                        upsert: true,
                        returnDocument: "after", // this is new !
                    }
                );
                await updatedLocationAudi.save();
            }
        }

        res.status(201).json(createShow);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            error: err,
            SUCCESS: false,
        });
        res.status(500).send("Server Error");
    }
});
router.get("/", async (req, res) => {
    try {
        const AllShows = await shows.find();

        res.json(AllShows);
    } catch (err) {
        res.json(err);
    }
});

export default router;