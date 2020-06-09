export interface ValidationOptions {
    abortOnValidationError?: boolean;
    runSerially?: boolean;
}

export interface ConstraintConfiguration {
    [key: string]: any;
    __prerequisites?: ConstraintsMapping;
}

export type ConstraintValue = boolean | string | number | ConstraintConfiguration;

export interface ConstraintsMapping {
    [path: string] : {
        [constraintName: string] : ConstraintValue | [ConstraintValue],
    } & {
        __and?: (string | ConstraintsMapping)[]
        __or?: (string | ConstraintsMapping)[]
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
    result: boolean;
    validationErrors?: ValidationError[];
}

export type ConstraintExecuter = (data: object, context: IRuntimeContext) => ValidationResult;

export interface IValidator {
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions, data?: any) : ValidationResult;
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, data?: any) : ValidationResult;
    validate<T>(objectsToValidate: T[], constraints: ConstraintsMapping, options?: ValidationOptions) : ValidationResult;
}

export interface IConstraintModule {

    initialize(validator: IValidator)

    buildConstraintExecuter(value: ConstraintValue, externalData?: any) : ConstraintExecuter;
}
