import { ValidationOptions, IValidator, ConstraintsMapping, ValidationResult } from "./interfaces";

export class Validator implements IValidator {


    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any) : ValidationResult
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, data?: any) : ValidationResult
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions) : ValidationResult {
        return undefined;
    }
}