import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits as formatEthUnits, parseUnits as parseEthUnits, formatEther, parseEther } from "@ethersproject/units";
import { assert } from "chai";

import { formatKlayUnits, parseKlayUnits, formatKlay, parseKlay } from "../src";

describe("Units", () => {
  describe("formatUnits", () => {
    it("klay units", () => {
      // unit names are case-insensitive.
      const peb = BigNumber.from("1000000000000000000"); // 1e18 peb

      assert.equal(formatKlayUnits(peb, "ston"), "1000000000.0"); // = 1e9 ston
      assert.equal(formatKlayUnits(peb, "gpeb"), "1000000000.0"); // = 1e9 gpeb

      assert.equal(formatKlayUnits(peb, "klay"), "1.0"); // = 1 KLAY
      assert.equal(formatKlayUnits(peb, "KLAY"), "1.0"); // = 1 KLAY
      assert.equal(formatKlay(peb), "1.0");

      assert.equal(formatKlayUnits(peb, "mKLAY"), "1000.0"); // = 1e3 mKLAY
      assert.equal(formatKlayUnits(peb, "MKLAY"), "0.000001"); // = 1e-6 MKLAY
    });

    it("eth units", () => {
      const wei = BigNumber.from("1000000000000000000"); // 1e18 wei
      assert.equal(formatKlayUnits(wei, "gwei"), formatEthUnits(wei, "gwei"));
      assert.equal(formatKlayUnits(wei, "ether"), formatEthUnits(wei, "ether"));
      assert.equal(formatKlay(wei), formatEther(wei));
    });
  });

  describe("parseUnits", () => {
    it("klay units", () => {
      assert.equal(parseKlayUnits("25.0", "ston").toString(), "25000000000"); // 25 ston = 25e9 peb
      assert.equal(parseKlayUnits("25.0", "gpeb").toString(), "25000000000"); // 25 gpeb = 25e9 peb

      assert.equal(parseKlayUnits("123.456", "klay").toString(), "123456000000000000000"); // 123.456 KLAY = 123.456e18 peb
      assert.equal(parseKlayUnits("123.456", "KLAY").toString(), "123456000000000000000"); // 123.456 KLAY = 123.456e18 peb
      assert.equal(parseKlay("123.456").toString(), "123456000000000000000");

      assert.equal(parseKlayUnits("1000.0", "mKLAY").toString(), "1000000000000000000"); // 1000 mKLAY = 1e18 peb
      assert.equal(parseKlayUnits("5", "MKLAY").toString(), "5000000000000000000000000"); // 5 MKLAY = 5e24 peb
    });

    it("eth units", () => {
      assert.equal(parseKlayUnits("77", "gwei").toString(), parseEthUnits("77", "gwei").toString());
      assert.equal(parseKlayUnits("77", "ether").toString(), parseEthUnits("77", "ether").toString());
      assert.equal(parseKlay("77").toString(), parseEther("77").toString());
    });
  });
});
