
import * as _ from 'lodash';

import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration } from '@configurable-validator/core'

export class FormatModule implements IConstraintModule {

    initialize(validator: IValidator) {
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            let result : boolean = true;
            let validationError : ValidationError;

            if(value === 'string' && !_.isString(data)){
                return {
                    result: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a string',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'number' && !_.isInteger(data)) {
                return {
                    result: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a number',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'boolean' && !_.isBoolean(data)) {
                return {
                    result: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a boolean',
                        path: context.fullPath
                    }]
                }
            }

            if(value === 'date' && !_.isDate(data)) {
                return {
                    result: false,
                    validationErrors: [{
                        constraintName: 'ofType',
                        constraintConfig: value,
                        description: 'object is not a date',
                        path: context.fullPath
                    }]
                }
            }

            return {
                result: true
            };
        }
    }

}