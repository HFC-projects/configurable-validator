import { expect } from "chai";
import { AnyModule } from "../src";

describe("AnyModule", () => {
    it("shouldCreate", () => {
        const anyModule = new AnyModule();
        expect(anyModule).not.to.be.null;
    });
});
