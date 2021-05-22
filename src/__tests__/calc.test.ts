import { frequencyConfig } from "../__config/frequency.config";
import { simpleCalculateCost } from "../__libs/calc";
import { calculateSavings } from "../__libs/calc";


describe("test simple calculate cost function", () => {
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

describe("test calculate savings function", () => {
  it("should return 0 for calculateSavings(0)", () => {
    expect(calculateSavings(0)).toBe(0);
  });
  it("should return 30000 for calculateSavings(100000)", () => {
    expect(calculateSavings(100000)).toBe(30000);
  });
});
