import { frequencyConfig } from "../__config/frequency.config";
import { simpleCalculateCost } from "../__libs/calc";

describe("test simple calculate function", () => {
  it("should return 0 for simpleCalculateCost(0, 1, 1, 1)", () => {
    expect(simpleCalculateCost(0, 1, 1, 1)).toBe(0);
  });

  it("should return 0 for simpleCalculateCost(1, 0, 1, 1)", () => {
    expect(simpleCalculateCost(1, 0, 1, 1)).toBe(0);
  });

  it("should return 0 for simpleCalculateCost(1, 1, 0, 1)", () => {
    expect(simpleCalculateCost(1, 1, 0, 1)).toBe(0);
  });

  it("should return 0 for simpleCalculateCost(1, 1, 1, 0)", () => {
    expect(simpleCalculateCost(1, 1, 1, 0)).toBe(0);
  });

  it("should return 100'000 for simpleCalculateCost(1, 100000, "+frequencyConfig.dailyHours+", "+frequencyConfig.daily+")", () => {
    expect(simpleCalculateCost(1, 100000, frequencyConfig.dailyHours, frequencyConfig.daily)).toBe(100000);
  });
});