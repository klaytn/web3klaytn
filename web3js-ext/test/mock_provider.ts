import { HttpProvider } from "web3-providers-http";
import {
  EthExecutionAPI,
  JsonRpcResponseWithResult,
  Web3APIMethod,
  Web3APIPayload,
  Web3APIReturnType,
  Web3APISpec,
} from "web3-types";

type mockRpcHandler =
  (params: Array<any>) => (Promise<any> | any);

export class MockProvider<API extends Web3APISpec = EthExecutionAPI> extends HttpProvider<API> {
  overrides: { [method: string]: mockRpcHandler } = {};

  mock_override(method: string, handler: mockRpcHandler) {
    this.overrides[method] = handler;
  }

  mock_reset() {
    this.overrides = {};
  }

  public async request<
		Method extends Web3APIMethod<API>,
		ResultType = Web3APIReturnType<API, Method>,
	>(
    payload: Web3APIPayload<API, Method>,
    requestOptions?: RequestInit,
  ): Promise<JsonRpcResponseWithResult<ResultType>> {
    const method = payload.method;
    const params = (payload.params as any[]) || [];
    let handler = this.overrides[method];
    if (handler) {
      return {
        id: 1,
        jsonrpc: "2.0",
        result: await handler(params),
      };
    } else {
      console.log("mock fallback", method, params);
      return super.request(payload, requestOptions);
    }
  }
}