import _ from "lodash";
import { ConnectionInfo } from "ethers/lib/utils";
import { Networkish } from "@ethersproject/networks";
import { JsonRpcProvider as EthersProvider } from "@ethersproject/providers";
import { JsonRpcProvider as KlaytnProvider } from "../../src/ethers";

type mockRpcHandler =
  (params: Array<any>) => (Promise<any> | any);


export class MockEthersProvider extends EthersProvider {

  overrides: { [method: string]: mockRpcHandler; } = {};

  constructor(url?: ConnectionInfo | string, network?: Networkish) {
    super(url, network);
  }

  send(method: string, params: Array<any>): Promise<any> {
    let handler = this.overrides[method];
    if (handler) {
      return handler(params);
    } else {
      console.log('mock fallback', method, params);
      return super.send(method, params);
    }
  }

  mock_override(method: string, handler: mockRpcHandler) {
    this.overrides[method] = handler;
  }

  mock_reset() {
    this.overrides = {};
  }
}

export class MockKlaytnProvider extends KlaytnProvider {

  overrides: { [method: string]: mockRpcHandler } = {};

  constructor(url?: ConnectionInfo | string, network?: Networkish) {
    super(url, network);
  }

  send(method: string, params: Array<any>): Promise<any> {
    let handler = this.overrides[method];
    if (handler) {
      return handler(params);
    } else {
      return super.send(method, params);
    }
  }

  mock_override(method: string, handler: mockRpcHandler) {
    this.overrides[method] = handler;
  }

  mock_reset() {
    this.overrides = {};
  }
}
