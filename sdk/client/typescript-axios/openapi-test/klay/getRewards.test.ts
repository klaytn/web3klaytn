import {Configuration, KlayApi} from "../../openapi";

const configuration = new Configuration({
    basePath: 'http://localhost:7151',
});

const api = new KlayApi(configuration);

describe('Klay getRewards API', () => {
    test('should return info of a block number', async () => {
        const response = await api.getRewards(1);
        expect(response.data.jsonrpc).toBe("2.0")
    });
});
