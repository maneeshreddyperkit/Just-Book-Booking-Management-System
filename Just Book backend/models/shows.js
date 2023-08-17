import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ShowsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    image:{
       type:String,
       default:""
    },
    reviews:{
        type:String,
    }
});
ShowsSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

ShowsSchema.set("toJSON", {
	virtuals: true,
});

export default mongoose.model("Shows", ShowsSchema);