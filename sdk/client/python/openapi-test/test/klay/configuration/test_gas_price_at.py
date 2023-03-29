from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import GasPriceAt
from klay.opensdk_python_klay.configuration import Configuration


class TestGasPriceAt(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.klay = GasPriceAt(self.api_client)
        self.baseFee = "0x64"

    def test_post(self):
        klay_response = self.klay.gas_price_at(
            self.baseFee,
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
