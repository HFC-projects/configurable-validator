import { expect } from "chai";
import { AndModule } from "../src";

describe("AndModule", () => {
    it("shouldCreate", () => {
        const andModule = new AndModule();
        expect(andModule).not.to.be.null;
    });
});
