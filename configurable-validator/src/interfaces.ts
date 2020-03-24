export interface ValidationOptions {
    abortOnValidationError?: boolean;
    runSerially?: boolean;
}

export interface BasicValidation {
    module: string;
    config?: any;
    type: 'single' | 'bulk';
    transformation?: any;
}

export interface Validation extends BasicValidation {
    description: string;
    condition?: BasicValidation;
}

export interface ValidationError {
    module: string;
    description: string;
    meta: object;
}

export interface ValidationResult<T> {
    result: boolean;
    validationObj: T;
    validationErrors?: ValidationError[];
}
