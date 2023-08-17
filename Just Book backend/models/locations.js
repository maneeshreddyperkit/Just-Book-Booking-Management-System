import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LocationsSchema = new Schema({
	name:{
        type:String,
        required:true
    },
    Audis:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Audi",
        }
    ]
});

LocationsSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

LocationsSchema.set("toJSON", {
	virtuals: true,
});

export default mongoose.model("Location", LocationsSchema);