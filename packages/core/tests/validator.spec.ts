import { expect } from "chai";

import {
    ConstraintModulesFactory,
    Validator,
    IConstraintModule,
    ConstraintExecuter,
    LazyConstraintModulesFactory,
} from "../src";

describe("Validator", () => {
    it("should pass all inputs correctly", async () => {
        class TestingAllValues<T> implements IConstraintModule {
            buildConstraintExecuter(expectedValue: T): ConstraintExecuter {
                return (value: any) => {
                    expect(value).to.equal(expectedValue);
                    return {
                        isValid: true,
                    };
                };
            }
        }
        const validator = new Validator(
            new ConstraintModulesFactory({
                equals: TestingAllValues,
            })
        );

        const result = await validator.validate([{ a: 3 }], { a: { equals: 3 } });

        expect(result.isValid).to.be.true;
    });

    it("should load constraints when running in lazy mode", async () => {
        const validator = new Validator(
            new LazyConstraintModulesFactory({
                exists: () => Promise.resolve(class implements IConstraintModule {
                    buildConstraintExecuter() {
                        return () => ({ isValid: true });
                    }
                }),
            })
        );

        const result = await validator.validate([{a: 3}], {a: {exists: true}});

        expect(result.isValid).to.be.true;
    });
});
