
import * as _ from 'lodash';

import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration, Validator, ValidationResult } from '@configurable-validator/core'

export class OrModule implements IConstraintModule {

    private _validator: IValidator;

    public initialize(validator: IValidator) {
        this._validator = validator;
    }

    public buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            let validationError : ValidationError;

            const validations = value as Record<string, ConstraintValue>
            const validationResults = new Array<ValidationResult>();
            for (const validationName in validations) {
                if (validations.hasOwnProperty(validationName)) {
                    const validationConfig = validations[validationName];
                    const  validationResult = this._validator.validate([data], {
                        "__self" : {
                            [validationName]: validationConfig
                        }
                    });
                    validationResults.push(validationResult);
                    if(validationResult.isValid) {
                        return {
                            isValid: true,
                        }
                    }
                }
            }

            const allErrors = _.flatten(validationResults.map(result => result.validationErrors));

            return {
                isValid: false,
                validationErrors: allErrors
            }
        }
    }

}