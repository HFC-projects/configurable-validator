export interface ValidationOptions {
    abortOnValidationError?: boolean;
    runSerially?: boolean;
    parentContext: IRuntimeContext;
}

export interface ConstraintConfiguration {
    [key: string]: any;
    __prerequisites?: ConstraintsMapping;
}

export type ConstraintBasicValue = boolean | string | number;
export type ConstraintValue = boolean | string | number | ConstraintConfiguration;

export interface ConstraintsMapping {
    [path: string] : {
        [constraintName: string] : ConstraintValue | Record<string, ConstraintValue>,
    }
}

/**
 * This interface contains relevant references for the execution of the constraints such as the reference to '__self' object and '__parent' runtimecontext
 */
export interface IRuntimeContext {
    fullPath: string;
}

export interface ValidationError {
    description: string;
    path: string,
    constraintName: string,
    constraintConfig: ConstraintValue
    meta?: object;
}

export interface ValidationResult {
    isValid: boolean;
    validationErrors?: ValidationError[];
}

export type ConstraintExecuter = (data: object, context: IRuntimeContext) => ValidationResult | Promise<ValidationResult>;

export interface IValidator {
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any): Promise<ValidationResult>;
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, data?: any): Promise<ValidationResult>;
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions): Promise<ValidationResult>;
}

export interface IConstraintModule {
    initialize?(validator: IValidator): void | Promise<void>;
    buildConstraintExecuter(value: ConstraintValue, externalData?: any): ConstraintExecuter;
}

export interface ConstraintConstructor<T extends IConstraintModule = IConstraintModule> {
    new(): T;
}

export interface IConstraintModulesFactory {
    create(constraintName: string, validator: IValidator): Promise<IConstraintModule>;
}