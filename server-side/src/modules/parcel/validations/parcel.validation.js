import Joi from 'joi';
import { generalFields } from '../../../../middlewares/validation.js';
import { parcelStatuses } from '../../../utils/constants.js';

export const createParcel  = {
    body : 
        Joi.object({
            parcelName : generalFields.string,
            pickupAddress : generalFields.string,
            dropOffAddress : generalFields.string,
        }).options({presence: "required"}),
}

export const assignParcel = {
    params : Joi.object({
        parcelId : generalFields._id
    }).options({ presence : "required" }),
    body: Joi.object({
        pickupTime : generalFields.string,
        dropOffTime : generalFields.string,
    }).options({ presence : "required" })
}

export const updateParcelStatus = {
    params : Joi.object({
        parcelId : generalFields._id
    }).options({ presence : "required" }),
    body: Joi.object({
        status :  Joi.string().valid(...Object.values(parcelStatuses)),
    }).options({ presence : "required" })   
}
