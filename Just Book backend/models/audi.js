import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AudiSchema = new Schema({
    name:{
        type:String,
        required:true
    },
   shows:[
        {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shows",
        }
    ]
});

AudiSchema.virtual("id").get(function () {
	return this._id.toHexString();
});

AudiSchema.set("toJSON", {
	virtuals: true,
});

export default mongoose.model("Audi", AudiSchema);