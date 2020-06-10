import { expect } from "chai";

import { OrModule } from "../../or/src/or";
import { EqualsModule } from "../../equals/src/equals";
import { ConstraintModulesFactory, Validator } from "../src";

describe("Validator", () => {
    describe("base constraints", () => {
        it("should success when using or and one constraint is valid", async () => {
            const validator = new Validator(
                new ConstraintModulesFactory({
                    or: OrModule,
                    equals: EqualsModule,
                })
            );
    
            const result = await validator.validate([{ a: 3 }], {
                a: { or: { constraints: [{ __self: { equals: 2 } }, { __self: { equals: 3 } }] } },
            });
    
            expect(result.result).to.be.true;
        });
    });
});
