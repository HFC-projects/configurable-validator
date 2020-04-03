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

export interface BasicValidationResult {
    result: boolean;
    meta: object;
}

export interface IValidationModule<T> {
    new(): IValidationModule<T>;
    init?(itemsToValidate: T[], data?: any): void;
    validate(item: T, validations: Validation[], data?: any): BasicValidationResult;
}