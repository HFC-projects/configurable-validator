import {IConstraintModule, ConstraintValue, ConstraintExecuter, ConstraintConfiguration, IRuntimeContext, IValidator} from '@configurable-validator/core'


export class UnqiueModule implements IConstraintModule {

    private _validator: IValidator;

    initialize(validator: IValidator) {
        this._validator = validator;
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {

        const config = value as ConstraintConfiguration;

        return (data: object, context: IRuntimeContext) => {

            //TODO: implement unique module

            return {
                isValid: true
            }
        }
    }

}