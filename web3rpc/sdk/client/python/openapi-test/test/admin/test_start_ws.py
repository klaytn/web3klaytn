from web3 import Web3
from base.constants import KLAYTN_URL
from unittest import TestCase
w3 = Web3(Web3.HTTPProvider(KLAYTN_URL))


class TestAdminStartWS(TestCase):

    def setUp(self) -> None:
        super().setUp()
        self.adminHost = "127.0.0.1"
        self.port = 8552
        self.cors = ""
        self.apis = "klay"

    def test_post(self):
        response = w3.geth.admin.start_ws(
            self.adminHost, self.port, self.cors, self.apis)
        self.assertIsInstance(response, bool)
