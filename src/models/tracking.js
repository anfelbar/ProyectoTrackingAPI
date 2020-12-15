//Import
import mongoose,{Schema} from 'mongoose';

/**
 * Lista de datos a recibir por parte del GSP.
 */
const trackingSchema = new Schema({
        /* TIME */
        Year: {type: Array, "default" : [] },
        Month: {type: Array, "default" : [] },
        Day: {type: Array, "default" : [] },
        Hour: {type: Array, "default" : [] },
        Minute: {type: Array, "default" : [] },
        Seconds: {type: Array, "default" : [] },
        /* GPS - coordinates */
        Latitude: { type: Array , "default" : [] },
        Longitude: { type: Array , "default" : [] },
        Altitude: {type: Array, "default" : []},        
        Speed: { type: Array , "default" : [] },        
        Precision: {type: Array, "default" : []},
        /* Index */
        GpsId:{ type:Number },
        Road: { type: String },
});


const Tracking =  mongoose.model('tracking',trackingSchema);

export default Tracking;
