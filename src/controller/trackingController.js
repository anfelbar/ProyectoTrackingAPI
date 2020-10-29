//import
//dado que en su archivo index exporto todos los modelos.
import { query } from 'express';
import { model } from 'mongoose';
import models from '../models';

//Exportar funciones, objetos, clases o expresiones
//Funciones asincronas
export default {
    add: async (req, res, next) => {
        try {
            const reg = await models.Tracking.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    query: async (req, res, next) => {
        try {
            const reg = await model.Tracking.findOne({ _id: req.query._id });
            if (!reg) {
                res.status(404).send({
                    message: "Not Found"
                });
            } else {
                res.status(200).json(reg);
            }
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    list: async (req, res, next) => {
        try {
            const reg = await models.Tracking.find({});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    update: async (req, res, next) => {
        try {
            const reg = await models.Tracking.findByIdAndUpdate({ _id: req.body._id }, { nombre: req.body.Road });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    remove: async (req, res, next) => {
        try {
            const reg = await models.Tracking.findByIdAndDelete({ _id: req.body._id });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    activate: async (req, res, next) => {
        try {
            const reg = await models.Tracking.findByIdAndUpdate({ _id: req.body._id }, { Distance: 0 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    deactivate: async (req, res, next) => {
        try {
            const reg = await models.Tracking.findByIdAndUpdate({ _id: req.body._id }, { Distance: 1 });
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
}
//