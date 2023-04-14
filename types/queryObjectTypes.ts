import { ParsedQs } from "qs";

export interface QueryObject {
  featured?: boolean;
  company?: string | string[] | ParsedQs | ParsedQs[];
  name?: string | string[] | ParsedQs | ParsedQs[];
  numericFilters?: string;
}
