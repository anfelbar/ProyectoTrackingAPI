//Import
import mongoose,{Schema} from 'mongoose';

/**
 * Lista de a enviar al GPS para iniciación de sus funciones.
 */
const initsetupSchema = new Schema({        
        /* Identificacion */
        GpsId:{ type:Number },
        Road: { type: String },
        Member:{type:String},
        /* Intervalo */
        Gaps:{type:Number}
});


const Initsetup =  mongoose.model('initsetup',initsetupSchema);

export default Initsetup;
