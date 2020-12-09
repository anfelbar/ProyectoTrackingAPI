'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
var dbUrl = 'mongodb+srv://tracking:tracking@trackingapi.pk5kg.mongodb.net/Tracking?retryWrites=true&w=majority';
_mongoose2.default.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(function (mongoose) {
    return console.log('Conectando a la base de dato');
}).catch(function (err) {
    return console.log(err);
});

var app = (0, _express2.default)();
app.use((0, _morgan2.default)('dev'));
app.use((0, _cors2.default)());

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
//Ruta Publica
app.use(_express2.default.static(_path2.default.join(__dirname + '\\public')));
//Uso de router
app.use('/api', _routes2.default);

app.set('port', process.env.PORT || 3000);

//Gestion de las Rutas

app.listen(app.get('port'), function () {
    console.log('Server on port ' + app.get('port'));
    //no indica el directorio del archivo usado.
});
//# sourceMappingURL=index.js.map