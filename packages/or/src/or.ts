import * as _ from "lodash";

import {
    IConstraintModule,
    ConstraintExecuter,
    IRuntimeContext,
    IValidator,
    ConstraintConfiguration,
    ConstraintsMapping,
    ValidationError,
} from "@configurable-validator/core";

export interface OrModuleConfiguration extends ConstraintConfiguration {
    constraints: ConstraintsMapping[];
}

export class OrModule implements IConstraintModule {
    private validator: IValidator;

    initialize(validator: IValidator) {
        this.validator = validator;
    }

    buildConstraintExecuter(config: OrModuleConfiguration): ConstraintExecuter {
        return async (data: object, context: IRuntimeContext) => {
            const validationErrors: ValidationError[] = [];
            for (const constraintsMapping of config.constraints) {
                const result = await this.validator.validate([data], constraintsMapping, { parentContext: context });

                if (result.isValid) {
                    return result;
                }

                if (result.validationErrors != null) {
                    validationErrors.push(...result.validationErrors);
                }
            }

            return {
                isValid: false,
                validationErrors,
            };
        };
    }
}
