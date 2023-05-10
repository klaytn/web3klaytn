import json
from unittest import TestCase
from base.constants import KLAYTN_URL
from opensdk.sdk import OpenSDK
from base.constants import (
    ERROR_CODE_REQUIRE_ARGUMENT,
)


class KlaytnBaseTesting(TestCase):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        self.response = None

    def assertResponseSuccess(self):
        self.assertIsNotNone(self.response)

    def assertErrorCodeMissingRequiredArgument(self):
        self.assertEqual(self.response["code"], ERROR_CODE_REQUIRE_ARGUMENT)
