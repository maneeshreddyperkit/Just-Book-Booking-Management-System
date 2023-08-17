import express from "express";
const router = express.Router();

//add admin emails here
const adminEmails = ["anieshbaratam1262@gmail.com","vavenu@iu.edu","mperkit@iu.edu","sh19@iu.edu"];

router.get("/", (req, res) => {
    const { email } = req.query;
    console.log("email is", email);
    if (adminEmails.includes(email)) {
        return res.status(200).send({ admin: true });
    } else {
        return res.status(200).send({ admin: false });
    }
});

export default router;