import { describe, it, expect } from "vitest";
import { transactionService } from "../transactionService.js";

describe("transactionService", () => {
  describe("craft", () => {
    it("returns unsigned transaction ready for signing", async () => {
      const input = { from: "alice", to: "bob", amount: "100", currency: "USD" };
      const result = await transactionService.craft(input);
      expect(result.unsigned).toEqual(input);
      expect(result.readyForSigning).toBe(true);
    });
  });

  describe("validate", () => {
    it("returns valid result for valid input", async () => {
      const result = await transactionService.validate({ transaction: {} });
      expect(result.valid).toBe(true);
      expect(result.errors).toEqual([]);
    });
  });
});
