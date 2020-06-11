import {IConstraintModule, ConstraintValue, ConstraintExecuter, ConstraintConfiguration, IRuntimeContext, IValidator} from '@configurable-validator/core'


export class ForEachModule implements IConstraintModule {

    private _validator: IValidator;

    initialize(validator: IValidator) {
        this._validator = validator;
    }

    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter {

        const config = value as ConstraintConfiguration;

        return (data: object, context: IRuntimeContext) => {
            const array = data as Array<object>;

            return this._validator.validate(array, config);
        }
    }

}