from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from eth.opensdk_python_eth.api_client import ApiClient
from eth.opensdk_python_eth.apis.tags.eth_api import Accounts
from eth.opensdk_python_eth.configuration import Configuration


class TestEthAccounts(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.eth = Accounts(self.api_client)

    def test_post(self):
        eth_response = self.eth.accounts()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
