import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import audi from "./routes/audi";
import locations from "./routes/locations";
import bodyParser from "body-parser";
import shows from "./routes/shows";
import userAdmin from "./routes/userAdmin";
import sample from "./routes/sample";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
app.use(cors());

dotenv.config();
try {
    console.log("connected to mongodb");
    await mongoose.connect(process.env.MONGO);
} catch (err) {
    throw err;
}
app.get("/users", (req, res) => {
    res.send("hello first request");
});
console.log("ksdnvkjdsn");
//middleware
//app.use(express.json);
app.use("/public/uploads", express.static("public/uploads"));
app.use("/audi", audi);
app.use("/locations", locations);
app.use("/shows", shows);
app.use("/check-admin", userAdmin);
//app.use("/shows",sample)
app.listen(3000, () => {
    console.log("connected to backend");
});