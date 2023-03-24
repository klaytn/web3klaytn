from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.apis.tags.klay_api import AccountCreated
from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import DecodeAccountKey
from klay.opensdk_python_klay.configuration import Configuration


class TestAccountCreated(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)
    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.klay = DecodeAccountKey(self.api_client)
        self.accountKey = "0x05f898a302a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512db84e04f84b02f848e301a103e4a01407460c1c03ac0c82fd84f303a699b210c0b054f4aff72ff7dcdf01512de301a10336f6355f5b532c3c1606f18fa2be7a16ae200c5159c8031dd25bfa389a4c9c06a302a102c8785266510368d9372badd4c7f4a94b692e82ba74e0b5e26b34558b0f081447"

    def test_post(self):
        klay_response = self.klay.decode_account_key(
            self.accountKey
        )

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.klay.decode_account_key()
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
