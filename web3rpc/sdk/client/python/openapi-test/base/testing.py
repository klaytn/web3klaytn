from web3py_ext import extend
import json
from unittest import TestCase
from base.constants import KLAYTN_URL, BAOBAB_URL
from base.constants import (
    ERROR_CODE_REQUIRE_ARGUMENT,
)
from web3 import Web3
from .eth import w3
class KlaytnBaseTesting(TestCase):

    def setUp(self) -> None:
        self.response = None
        self.w3 = w3

    def assertResponseSuccess(self):
        self.assertIsNotNone(self.response)
        self.assertNotIn("error", self.response)

    def assertErrorCodeMissingRequiredArgument(self):
        self.assertEqual(self.response["code"], ERROR_CODE_REQUIRE_ARGUMENT)
