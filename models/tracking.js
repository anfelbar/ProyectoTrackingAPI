//Import
import mongoose,{Schema} from 'mongoose';

const trackingSchema = new Schema({
        BusId:{ type:Number },
        Road: { type: String },
        Time: { type: Date },
        CodeBattery : { type: String },
        Temperature: { type: Number },
        TimeService : { type: Number },
        Latitude: { type: Number },
        Longitude: { type: Number },
        Speed: { type: Number },
        Distance: { type: Number },
        Alert: { type: String }
});


const Tracking =  mongoose.model('tracking',trackingSchema);

export default Tracking;
