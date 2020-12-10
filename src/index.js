import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import mongoose, { mongo } from 'mongoose';

import path from 'path';


import router from './routes';

//mongodb+srv://tracking:<password>@trackingapi.pk5kg.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb+srv://tracking:m0n1t0r30@trackingapi.pk5kg.mongodb.net/Tracking?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useNewUrlParser: true,useUnifiedTopology:true})
.then(mongoose => console.log('Conectando a la base de datos'))
.catch(err => console.log(err));


const app = express();
app.use(morgan('dev'));
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));
//Ruta Publica
app.use(express.static( path.join(__dirname + '\\public')));
//Uso de router
app.use('/api',router);

app.set('port', process.env.PORT || 3000);


//Gestion de las Rutas

app.listen(app.get('port'),()=>{
    console.log('Server on port ' + app.get('port'));
    //no indica el directorio del archivo usado.
});

