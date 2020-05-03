export type ConstraintConfiguration = Partial<Record<string,any>> & {
    __discriminator: "ConstraintConfiguration"
    __prerequisites?: ConstraintsMapping
}

export function instanceOfConstraintConfiguration(object: any): object is ConstraintConfiguration {
    return (object as ConstraintConfiguration).__discriminator !== undefined;
}

export type ConstraintValue = boolean | string | number | ConstraintConfiguration;

export interface ConstraintsMapping {
    [path: string] : {
        [constraintName: string] : ConstraintValue,
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

export interface IConstraintModule {
    buildConstraintExecuter(value: ConstraintValue, externalData?: any) : ConstraintExecuter;
}