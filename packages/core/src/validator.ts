import { ValidationOptions, ConstraintsMapping } from "./interfaces";
import { ModuleFactory } from "./module-factory";

export class Validator {
    constructor(private moduleFactory: ModuleFactory) {
        
    }

    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping[], options?: ValidationOptions, data?: any)
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping[], data?: any)
    public validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping[], options?: ValidationOptions) {

    }
}