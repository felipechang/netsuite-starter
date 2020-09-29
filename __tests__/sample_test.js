const newRecord = require("N/record/instance");
const Email = require("N/email");
const Bloc = require("../../source/test_bloc");

jest.mock("N/email");
jest.mock("N/record/instance");

beforeEach(() => {
    jest.clearAllMocks();
});

describe("bloc.test", () => {

    it("Email is sent", () => {

        newRecord.id = "111"

        const emailBloc = new Bloc.default(newRecord);
        emailBloc.sendEmail();

        expect(Email.send).toHaveBeenCalled();

        expect(Email.send).toHaveBeenCalledWith({
            author: 1111,
            body: "body",
            subject: "subject",
            recipients: ["my@email.com"],
            relatedRecords: {
                transactionId: newRecord.id
            }
        })
    });
});