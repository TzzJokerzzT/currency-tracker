import { formatCurrency } from "../FormatCurrency";

describe("formatCurrency", () => {
  it("formats a number as USD currency", () => {
    expect(formatCurrency(1000)).toBe("1,000.00");
  });

  it("handles zero correctly", () => {
    expect(formatCurrency(0)).toBe("0.00");
  });

  it("handles negative numbers", () => {
    expect(formatCurrency(-500)).toBe("-500.00");
  });
});
