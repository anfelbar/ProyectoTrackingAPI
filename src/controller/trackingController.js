
import { query } from 'express';
import { model } from 'mongoose';
import models from '../models';

/**
 * POST - GET request.
 */
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
    list: async (req, res, next) => {
        try {
            const reg = await models.Tracking.find({});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
}
