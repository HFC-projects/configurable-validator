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