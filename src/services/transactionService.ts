import type { CraftRequest, CraftResult, ValidateRequest, ValidateResult } from "../types/transaction.js";

export const transactionService = {
  async craft(input: CraftRequest): Promise<CraftResult> {
    // TODO: Implement transaction crafting
    return {
      unsigned: input,
      readyForSigning: true,
    };
  },

  async validate(input: ValidateRequest): Promise<ValidateResult> {
    // TODO: Implement transaction validation
    return {
      valid: true,
      errors: [],
    };
  },
};
