export interface CraftRequest {
  from?: string;
  to?: string;
  amount?: string;
  currency?: string;
  [key: string]: unknown;
}

export interface CraftResult {
  unsigned: CraftRequest;
  readyForSigning: boolean;
}

export interface ValidateRequest {
  transaction?: unknown;
  [key: string]: unknown;
}

export interface ValidateResult {
  valid: boolean;
  errors: string[];
}
