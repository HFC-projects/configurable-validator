import * as _ from "lodash";
import {
    IConstraintModule,
    ConstraintExecuter,
    IRuntimeContext,
    ConstraintConfiguration,
    ValidationResult,
    ConstraintBasicValue,
} from "@configurable-validator/core";

export interface EqualsConfiguration extends ConstraintConfiguration {
    value: unknown;
}

export class EqualsModule implements IConstraintModule {
    buildConstraintExecuter(configOrValue: ConstraintBasicValue | EqualsConfiguration): ConstraintExecuter {
        return (data: unknown, context: IRuntimeContext): ValidationResult => {
            const value = _.isObject(configOrValue) ? configOrValue.value : configOrValue;
            if (!_.isEqual(data, value)) {
                return {
                    isValid: false,
                    validationErrors: [{
                        constraintConfig: {value},
                        constraintName: "equals",
                        description: "given values aren't equal",
                        path: context.fullPath,
                        meta: { data, value },
                    }],
                }
            }
            
            return {
                isValid: true,
            };
        };
    }
}
