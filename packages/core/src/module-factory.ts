import { IValidationModule } from "@configurable-validator/interfaces";

export class ModuleFactory {


    public loadModule<T>(name: string, validationModule: IValidationModule<T>) {

    }

    public createValidation(name: string): IValidationModule<any> {
        return null;
    }
}