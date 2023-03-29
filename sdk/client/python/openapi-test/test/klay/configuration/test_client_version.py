from base.constants import KLAYTN_URL
from base.testing import KlaytnBaseTesting
from klay.opensdk_python_klay.api_client import ApiClient
from klay.opensdk_python_klay.apis.tags.klay_api import ClientVersion
from klay.opensdk_python_klay.configuration import Configuration


class TestClientVersion(KlaytnBaseTesting):
    _configuration = Configuration(host=KLAYTN_URL)

    def setUp(self) -> None:
        super().setUp()
        self.api_client = ApiClient(configuration=self._configuration)
        self.klay = ClientVersion(self.api_client)

    def test_post(self):
        klay_response = self.klay.client_version()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)
