'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackingSchema = new _mongoose.Schema({
        BusId: { type: Number },
        Road: { type: String },
        Time: { type: Date },
        CodeBattery: { type: String },
        Temperature: { type: Number },
        TimeService: { type: Number },
        Latitude: { type: Number },
        Longitude: { type: Number },
        Speed: { type: Number },
        Distance: { type: Number },
        Alert: { type: String }
}); //Import


var Tracking = _mongoose2.default.model('tracking', trackingSchema);

exports.default = Tracking;
//# sourceMappingURL=tracking.js.map