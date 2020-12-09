'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _mongoose = require('mongoose');

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //import
//dado que en su archivo index exporto todos los modelos.


//Exportar funciones, objetos, clases o expresiones
//Funciones asincronas
exports.default = {
    add: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return _models2.default.Tracking.create(req.body);

                        case 3:
                            reg = _context.sent;

                            res.status(200).json(reg);
                            _context.next = 11;
                            break;

                        case 7:
                            _context.prev = 7;
                            _context.t0 = _context['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context.t0);

                        case 11:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined, [[0, 7]]);
        }));

        return function add(_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }(),
    query: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _mongoose.model.Tracking.findOne({ _id: req.query._id });

                        case 3:
                            reg = _context2.sent;

                            if (!reg) {
                                res.status(404).send({
                                    message: "Not Found"
                                });
                            } else {
                                res.status(200).json(reg);
                            }
                            _context2.next = 11;
                            break;

                        case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context2.t0);

                        case 11:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined, [[0, 7]]);
        }));

        return function query(_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }(),
    list: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.prev = 0;
                            _context3.next = 3;
                            return _models2.default.Tracking.find({});

                        case 3:
                            reg = _context3.sent;

                            res.status(200).json(reg);
                            _context3.next = 11;
                            break;

                        case 7:
                            _context3.prev = 7;
                            _context3.t0 = _context3['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context3.t0);

                        case 11:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined, [[0, 7]]);
        }));

        return function list(_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }(),
    update: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.prev = 0;
                            _context4.next = 3;
                            return _models2.default.Tracking.findByIdAndUpdate({ _id: req.body._id }, { nombre: req.body.Road });

                        case 3:
                            reg = _context4.sent;

                            res.status(200).json(reg);
                            _context4.next = 11;
                            break;

                        case 7:
                            _context4.prev = 7;
                            _context4.t0 = _context4['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context4.t0);

                        case 11:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined, [[0, 7]]);
        }));

        return function update(_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }(),
    remove: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.prev = 0;
                            _context5.next = 3;
                            return _models2.default.Tracking.findByIdAndDelete({ _id: req.body._id });

                        case 3:
                            reg = _context5.sent;

                            res.status(200).json(reg);
                            _context5.next = 11;
                            break;

                        case 7:
                            _context5.prev = 7;
                            _context5.t0 = _context5['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context5.t0);

                        case 11:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined, [[0, 7]]);
        }));

        return function remove(_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    }(),
    activate: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                    switch (_context6.prev = _context6.next) {
                        case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return _models2.default.Tracking.findByIdAndUpdate({ _id: req.body._id }, { Distance: 0 });

                        case 3:
                            reg = _context6.sent;

                            res.status(200).json(reg);
                            _context6.next = 11;
                            break;

                        case 7:
                            _context6.prev = 7;
                            _context6.t0 = _context6['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context6.t0);

                        case 11:
                        case 'end':
                            return _context6.stop();
                    }
                }
            }, _callee6, undefined, [[0, 7]]);
        }));

        return function activate(_x16, _x17, _x18) {
            return _ref6.apply(this, arguments);
        };
    }(),
    deactivate: function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res, next) {
            var reg;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                    switch (_context7.prev = _context7.next) {
                        case 0:
                            _context7.prev = 0;
                            _context7.next = 3;
                            return _models2.default.Tracking.findByIdAndUpdate({ _id: req.body._id }, { Distance: 1 });

                        case 3:
                            reg = _context7.sent;

                            res.status(200).json(reg);
                            _context7.next = 11;
                            break;

                        case 7:
                            _context7.prev = 7;
                            _context7.t0 = _context7['catch'](0);

                            res.status(500).send({ message: 'ERROR' });
                            next(_context7.t0);

                        case 11:
                        case 'end':
                            return _context7.stop();
                    }
                }
            }, _callee7, undefined, [[0, 7]]);
        }));

        return function deactivate(_x19, _x20, _x21) {
            return _ref7.apply(this, arguments);
        };
    }()
    //

};
//# sourceMappingURL=trackingController.js.map