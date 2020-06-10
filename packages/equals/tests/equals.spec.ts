import { expect } from "chai";
import { EqualsModule } from "../src";

describe("EqualsModule", () => {
    it("shouldCreate", () => {
        const equalsModule = new EqualsModule();
        expect(equalsModule).not.to.be.null;
    });
});
