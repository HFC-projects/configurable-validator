
import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, ValidationError, IValidator, ConstraintConfiguration } from '@configurable-validator/core'

export class ExistsModule implements IConstraintModule {

    initialize(validator: IValidator) {
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            let exists: boolean;
            let validationError: ValidationError;
            if(typeof value === "boolean") {
                exists = (data != undefined) == value;
                validationError = {
                    constraintName: 'exists',
                    constraintConfig: value,
                    description: 'object does not exist',
                    path: context.fullPath
                }
            }
            if(typeof value === "string") {
                exists = data.hasOwnProperty(value);
                validationError = {
                    constraintName: 'exists',
                    constraintConfig: value,
                    description: 'object does not exist',
                    path: context.fullPath
                }
            }
            else {
                exists = data.hasOwnProperty((value as ConstraintConfiguration).path);
            }
            return {
                result: true,
            }
        }
    }

}