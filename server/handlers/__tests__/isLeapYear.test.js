const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");


jest.mock("../../../storage/models/math.model", () => {
    return {
        isLeapYear: jest.fn()
    };
})

test("is-weekend false", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year"
    });
    const response = httpMocks.createResponse();
    mathModel.isLeapYear.mockResolvedValue(false);
    await mathHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});


test("is-weekend false", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-leap-year"
    });
    const response = httpMocks.createResponse();
    mathModel.isLeapYear.mockResolvedValue(true);
    await mathHandler.isLeapYear(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});