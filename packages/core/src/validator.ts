import * as _ from 'lodash';
import { ValidationOptions, IValidator, ConstraintsMapping, ValidationResult, IConstraintModulesFactory } from "./interfaces";

export class Validator implements IValidator {
    constructor(
        private constraintModulesFactory: IConstraintModulesFactory,
    ) {}

    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any): Promise<ValidationResult>;
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, data?: any): Promise<ValidationResult>;
    public async validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any): Promise<ValidationResult> {
        if (data === undefined && !this.isOptions(options)){
            data = options;
            options = undefined;
        }

        for (const [path, pathConstraints] of Object.entries(constraints)) {
            for (const [constraintName, value] of Object.entries(pathConstraints)) {
                const constraintModule = await this.constraintModulesFactory.create(constraintName, this);
                
                const executor = constraintModule.buildConstraintExecuter(value, data);

                for (const objectToValidate of objectsToValidate) {
                    const result = await executor(_.get(objectToValidate, path), { fullPath: path });

                    if (!result.result) {
                        return result;
                    }
                }
            }
        }

        return {
            result: true,
        };
    }

    private isOptions(options: ValidationOptions) {
        return _.isObject(options) && (options.runSerially !== undefined || options.runSerially !== undefined);
    }
}