import { expect, test } from "vitest";

import { assert as myAssert } from "/~/util/assert";

test("assert", () => {
  expect(myAssert(true)).toBeUndefined();

  expect(() => myAssert(false)).toThrowError(/assertion error/);
  expect(() => myAssert(false, "G_G")).toThrowError(/G_G/);
});
