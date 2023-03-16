import {
    Configuration, GetRewardsBlockNumberOrTagParameter,
    KlayAccountApi,
} from "../../../openapi";

const configuration = new Configuration({
    basePath: 'http://localhost:7151',
});

const api = new KlayAccountApi(configuration);

describe('accountCreated', () => {
    test('should return false', async () => {
        const response = await api.accountCreated(
            "0xa4f42d4d2a3a13874406435500950c9bf2d783db",
            "latest"
        );
        expect(response.data.result).toBe(false);
    })
});
