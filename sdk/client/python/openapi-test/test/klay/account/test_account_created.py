from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.apis.tags.klay_api import AccountCreated
from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import AccountCreated
from klay.opensdk_python_klay.configuration import Configuration


class TestAccountCreated(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)
    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.klay = AccountCreated(self.api_client)
        self.blockTag = 'latest'
        self.address = "0xa4f42d4d2a3a13874406435500950c9bf2d783db"


    def test_post(self):
        klay_response = self.klay.account_created(
            self.address, self.blockTag
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.klay.account_created(self.blockTag)
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
