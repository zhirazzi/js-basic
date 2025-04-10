const lotBilling = require('./lotBilling');

describe("lotBilling", () => {
    it("should return 133000 when vehicleType = car and duration = 27", () => {
        //given
        const VehicleType = "car";
        const Duration = 27;

        //when
        const result = lotBilling(VehicleType, Duration);

        //then
        const expectedResult = 133000;

        expect(result).toBe(expectedResult);
    }); 
});