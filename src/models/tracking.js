//Import
import mongoose,{Schema} from 'mongoose';

const trackingSchema = new Schema({

        BusId:{ type:Number },
        Road: { type: String },
        //
        Year: {type: Array, "default" : [] },
        Month: {type: Array, "default" : [] },
        Day: {type: Array, "default" : [] },
        Hour: {type: Array, "default" : [] },
        Minute: {type: Array, "default" : [] },
        Seconds: {type: Array, "default" : [] },
        //
        CodeBattery : { type: String },
        Temperature: { type: Number },
        TimeService : { type: Number },
        //
        Latitude: { type: Array , "default" : [] },
        Longitude: { type: Array , "default" : [] },
        Speed: { type: Array , "default" : [] },
        //
        Distance: { type: Number },
        Alert: { type: String }
});


const Tracking =  mongoose.model('tracking',trackingSchema);

export default Tracking;
