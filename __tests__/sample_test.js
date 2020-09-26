(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "N/record", "N/record/instance"], factory);
    }
})(function (require, exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    // @ts-ignore
    var record_1 = require("N/record");
    // @ts-ignore
    var instance_1 = require("N/record/instance");
    jest.mock("N/record");
    jest.mock("N/record/instance");
    beforeEach(function () {
        jest.clearAllMocks();
    });
    describe("Basic jest test with simple assert", function () {
        it("should assert strings are equal", function () {
            var a = "foobar";
            var b = "foobar";
            expect(a).toMatch(b);
        });
    });
    describe("Sample test with provided record module stubs", function () {
        it("should update Sales Order memo field", function () {
            // Given
            var salesOrderId = 1352;
            record_1.default.load.mockReturnValue(instance_1.default);
            instance_1.default.save.mockReturnValue(salesOrderId);
            // When
            var salesOrderRecord = record_1.default.load({ id: salesOrderId });
            salesOrderRecord.setValue({ fieldId: "memo", value: "foobar" });
            var updatedSalesOrderId = salesOrderRecord.save({ enableSourcing: false });
            // Then
            expect(record_1.default.load).toHaveBeenCalledWith({ id: salesOrderId });
            expect(instance_1.default.setValue).toHaveBeenCalledWith({ fieldId: "memo", value: "foobar" });
            expect(instance_1.default.save).toHaveBeenCalledWith({ enableSourcing: false });
            expect(salesOrderId).toBe(updatedSalesOrderId);
        });
    });
});
