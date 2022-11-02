import { describe, expect, test } from "@jest/globals";
import { truth } from "./index";

describe("index", () => {
  describe("truth", () => {
    test("should return true", () => {
      expect(truth()).toBe(true);
    });
  });
});
