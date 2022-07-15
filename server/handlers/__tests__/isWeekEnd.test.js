const httpMocks = require("node-mocks-http");
const mathHandler = require("../math.js");
const mathModel = require("../../../storage/models/math.model");


jest.mock("../../../storage/models/math.model", () => {
    return {
        isWeekEnd: jest.fn()
    };
})

// const myMock = jest.fn()

test("is-weekend false", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend"
    });
    const response = httpMocks.createResponse();
    mathModel.isWeekEnd.mockResolvedValue(false);
    await mathHandler.isWeekEnd(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: false,
        error: null
    });
});

test("is-weekend true", async () => {
    const request = httpMocks.createRequest({
        method: "GET",
        url: "/is-weekend"
    });
    const response = httpMocks.createResponse(true);
    mathModel.isWeekEnd.mockReturnValue(true);
    await mathHandler.isWeekEnd(request, response);
    expect(response.statusCode).toEqual(200);
    expect(response._getJSONData()).toEqual({
        data: true,
        error: null
    });
});