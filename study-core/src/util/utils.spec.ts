import "mocha";
import {expect} from "chai";
import Utils from "util/Utils";

describe("Utils test", () => {
    describe("Test isNull", () => {
        it("should return true for null | undefined", () => {
            expect(Utils.isNull(null)).equal(true);
            expect(Utils.isNull(undefined)).equal(true);
            expect(Utils.isNull(1)).equal(false);
            expect(Utils.isNull("A")).equal(false);
            expect(Utils.isNull(true)).equal(false);
        });
    });
});
