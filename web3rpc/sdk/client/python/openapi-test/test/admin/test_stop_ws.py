from web3 import Web3
from base.constants import KLAYTN_URL
from unittest import TestCase
w3 = Web3(Web3.HTTPProvider(KLAYTN_URL))


class TestAdminStopWS(TestCase):

    def test_post(self):
        response = w3.geth.admin.stop_ws()
        self.assertIsInstance(response, bool)
