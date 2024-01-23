import { assert } from "chai";
import { describe, it } from "mocha";

import {
  AccountKeyFactory,
  AccountKeyNil,
  AccountKeyLegacy,
  AccountKeyPublic,
  AccountKeyFail,
  AccountKeyWeightedMultiSig,
  AccountKeyRoleBased,
} from "../src";

describe("AccountKeyFactory", () => {
  it("AccountKeyNil", () => {
    const key = AccountKeyFactory.fromObject({ type: 0 });
    assert.instanceOf(key, AccountKeyNil);
    assert.equal(key.toRLP(), "0x80");
  });

  it("AccountKeyLegacy", () => {
    const key = AccountKeyFactory.fromObject({ type: 1 });
    assert.instanceOf(key, AccountKeyLegacy);
    assert.equal(key.toRLP(), "0x01c0");
  });

  it("AccountKeyPublic", () => {
    const key = AccountKeyFactory.fromObject({ type: 2, key: "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8" });
    assert.instanceOf(key, AccountKeyPublic);
    assert.equal(key.getField("key"), "0x02dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8");
    assert.equal(key.toRLP(), "0x02a102dbac81e8486d68eac4e6ef9db617f7fbd79a04a3b323c982a09cdfc61f0ae0e8");
  });

  it("AccountKeyFail", () => {
    const key = AccountKeyFactory.fromObject({ type: 3 });
    assert.instanceOf(key, AccountKeyFail);
    assert.equal(key.toRLP(), "0x03c0");
  });

  it("AccountKeyWeightedMultiSig", () => {
    const key = AccountKeyFactory.fromObject({ type: 4, threshold: 3, keys: [
      [1, "0x04c734b50ddb229be5e929fc4aa8080ae8240a802d23d3290e5e6156ce029b110e61a443ac3ffff164d1fb3617875f07641014cf17af6b7dc38e429fe838763712"],
      [1, "0x0412d45f1cc56fbd6cd8fc877ab63b5092ac77db907a8a42c41dad3e98d7c64dfb8ef355a8d524eb444eba507f236309ce08370debaa136cb91b2f445774bff842"],
      [1, "0x04ea9a9f85065a00d7b9ffd3a8532a574035984587fd08107d8f4cbad6b786b0cdb95ebb02d9397b4a8faceb58d485d612f0379a923ec0ddcf083378460a56acca"],
      [1, "0x048551bc489d62fa2e6f767ba87fe93a62b679fca8ff3114eb5805e6487b51e8f64206aa84bc8955fcbfcc396854228aa63ebacd81b7311a31ab9d71d90b7ec3d7"]
    ]});
    assert.instanceOf(key, AccountKeyWeightedMultiSig);
    assert.equal(key.getField("threshold"), 3);
    assert.equal(key.getField("keys").length, 4);
    assert.equal(key.getField("keys")[0][0], 1);
    assert.equal(key.getField("keys")[0][1], "0x02c734b50ddb229be5e929fc4aa8080ae8240a802d23d3290e5e6156ce029b110e");
    assert.equal(key.toRLP(), "0x04f89303f890e301a102c734b50ddb229be5e929fc4aa8080ae8240a802d23d3290e5e6156ce029b110ee301a10212d45f1cc56fbd6cd8fc877ab63b5092ac77db907a8a42c41dad3e98d7c64dfbe301a102ea9a9f85065a00d7b9ffd3a8532a574035984587fd08107d8f4cbad6b786b0cde301a1038551bc489d62fa2e6f767ba87fe93a62b679fca8ff3114eb5805e6487b51e8f6");
  });

  it("AccountKeyRoleBased", () => {
    const key1 = { type: 2, key: "0x03e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d" };
    const key2 = { type: 4, threshold: 2, keys: [
      [1, "0x03e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d"],
      [1, "0x0336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06"],
    ]};
    const key3 = { type: 2, key: "0x02c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447" };

    const key1RLP = "0x02a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512d";
    const key2RLP = "0x04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06";
    const key3RLP = "0x02a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447";

    const key = AccountKeyFactory.fromObject({ type: 5, keys: [key1, key2, key3] });
    assert.instanceOf(key, AccountKeyRoleBased);
    assert.equal(key.getField("keys").length, 3);
    assert.equal(key.getField("keys")[0], key1RLP);
    assert.equal(key.getField("keys")[1], key2RLP);
    assert.equal(key.getField("keys")[2], key3RLP);
    assert.equal(key.toRLP(), "0x05f898a302a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512db84e04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06a302a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447");
  });
});