from web3py_ext import extend
from unittest import TestCase
from web3 import Web3
from base.constants import BAOBAB_URL
w3 = Web3(Web3.HTTPProvider(BAOBAB_URL))


class TestCreateAccessList(TestCase):

    def setUp(self) -> None:
        super().setUp()
        self.transactionArgs = {
            "to": "0x00f5f5f3a25f142fafd0af24a754fafa340f32c7",
            "gas": "0x3d0900",
            "data": "0x20965255",
            "from": "0x3bc5885c2941c5cda454bdb4a8c88aa7f248e312",
            "gasPrice": "0x3b9aca00"
        }

    def test_post(self):
        self.response = w3.eth_other.create_access_list(
            self.transactionArgs
        )
        self.assertTrue(len(self.response) >= 0)

    def test_post_wrong_with_lack_paramaters(self):
        with self.assertRaises(ValueError):
            self.response = w3.eth_other.create_access_list()

