
import * as _ from 'lodash';

import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration } from '@configurable-validator/core'

export class FormatModule implements IConstraintModule {

    initialize(validator: IValidator) {
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            let result : boolean = true;
            let validationError : ValidationError;

            //TODO: implement regex validation

            return {
                isValid: true
            };
        }
    }

}