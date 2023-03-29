from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import FeeHistory
from klay.opensdk_python_klay.configuration import Configuration


class TestFeeHistory(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.klay = FeeHistory(self.api_client)
        self.blockCount = "0x10"
        self.lastBlock = "latest"
        self.rewardPercentiles = [0.1, 0.2, 0.3]

    def test_post(self):
        klay_response = self.klay.fee_history(
            self.blockCount, self.lastBlock, self.rewardPercentiles
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.klay.fee_history(self.lastBlock)
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
