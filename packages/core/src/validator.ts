import { ValidationOptions, IValidator, ConstraintsMapping } from "./interfaces";

export class Validator implements IValidator {


    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any)
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, data?: any)
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions) {

    }
}