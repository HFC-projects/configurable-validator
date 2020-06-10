import * as _ from 'lodash';
import { ValidationOptions, IValidator, ConstraintsMapping, ValidationResult, IConstraintModulesFactory, ConstraintConfiguration } from "./interfaces";

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

        for (const objectToValidate of objectsToValidate) {
            const result = await this.validateItem(objectToValidate, constraints, options, data);

            if (!result.result) {
                return result;
            }
        }

        return {
            result: true,
        };
    }

    private async validateItem<T>(
        objectToValidate: T,
        constraints: ConstraintsMapping,
        options: ValidationOptions,
        data: any
    ): Promise<ValidationResult> {
        for (const [path, pathConstraints] of Object.entries(constraints)) {
            for (const [constraintName, value] of Object.entries(pathConstraints)) {
                const constraintModule = await this.constraintModulesFactory.create(constraintName, this);
                
                const executor = constraintModule.buildConstraintExecuter(value, data);
                const valueToValidate = path === '__self' ? objectToValidate : _.get(objectToValidate, path);

                if (typeof value === "object" && (value as ConstraintConfiguration).__prerequisites != null) {
                    const result = await this.validateItem(
                        objectToValidate,
                        (value as ConstraintConfiguration).__prerequisites,
                        options,
                        data
                    );
                    
                    if (!result.result) {
                        return result;
                    }
                }

                const fullPath = options?.parentContext ? `${options.parentContext}.${path}` : path;
                const result = await executor(valueToValidate, { fullPath });

                if (!result.result) {
                    return result;
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
