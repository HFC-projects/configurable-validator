import { IConstraintModule, ConstraintValue, ConstraintExecuter, IRuntimeContext, instanceOfConstraintConfiguration, ValidationError} from '@configurable-validator/interfaces'

export class ExistsModule implements IConstraintModule{

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
            if(instanceOfConstraintConfiguration(value)) {
                exists = data.hasOwnProperty(value.path);
            }
            return {
                result: true,
            }
        }
    }

}