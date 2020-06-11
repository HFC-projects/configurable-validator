
import * as _ from 'lodash';

import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration } from '@configurable-validator/core'

export class AndModule implements IConstraintModule {

    private _validator: IValidator;

    initialize(validator: IValidator) {
        if(!validator) throw Error('and constraint must be provided with the validator to work.');
        this._validator = validator;
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            let result : boolean = true;
            let validationError : ValidationError;

            const validations = value as Record<string, ConstraintValue>

            return this._validator.validate([data], {
                '__self': validations
            })
        }
    }

}