import { assert } from "chai";

import { foo } from "../src";

describe("foo", () => {
  it("success", () => {
    assert.equal(foo(), 42);
  });
});
