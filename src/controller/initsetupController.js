import { query } from 'express';
import { model } from 'mongoose';
import models from '../models';

/**
 * POST - GET request.
 */

export default {
    init: async(req,res,next) =>{
        try {
            const reg = await models.Initsetup.find({});
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    },
    addinit: async(req,res,next) =>{
        try {
            const reg = await models.Initsetup.create(req.body);
            res.status(200).json(reg);
        } catch (error) {
            res.status(500).send({ message: 'ERROR' });
            next(error);
        }
    }
}
