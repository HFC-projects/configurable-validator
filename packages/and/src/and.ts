import * as _ from "lodash";

import {
    IConstraintModule,
    ConstraintExecuter,
    IRuntimeContext,
    IValidator,
    ConstraintConfiguration,
} from "@configurable-validator/core";

// export interface AndModuleConfiguration extends ConstraintConfiguration {
// 
// }

// TODO: this module feels redundant, because the basic logic is solved by the basic configuration idea
export class AndModule implements IConstraintModule {
    private validator: IValidator;

    initialize(validator: IValidator) {
        this.validator = validator;
    }

    buildConstraintExecuter(config: ConstraintConfiguration): ConstraintExecuter {
        return (data: object, context: IRuntimeContext) => {
            return {
                result: true,
            };
        };
    }
}
