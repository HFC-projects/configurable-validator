import { Validation, ValidationOptions } from "./interfaces";
import { ModuleFactory } from "./module-factory";

export class Validator {
    constructor(private moduleFactory: ModuleFactory) {
        
    }

    public validate<T>(objectsToValidate: T[], validations: Validation[], options?: ValidationOptions, data?: any)
    public validate<T>(objectsToValidate: T[], validations: Validation[], data?: any)
    public validate<T>(objectsToValidate: T[], validations: Validation[], options?: ValidationOptions) {

    }

    public validateId<T>(objectsToValidate: T[], validationIds: string[], options?: ValidationOptions, data?: any)
    public validateId<T>(objectsToValidate: T[], validationIds: string[], data?: any)
    public validateId<T>(objectsToValidate: T[], validationIds: string[], options?: ValidationOptions) {

    }
}
