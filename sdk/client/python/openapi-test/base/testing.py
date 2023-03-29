import json
from unittest import TestCase
from base.constants import KLAYTN_URL
from opensdk.sdk import OpenSDK
from base.constants import (
    HTTP_200_OK,
    ERROR_CODE_INCORRECT_METHOD,
    ERROR_CODE_REQUIRE_ARGUMENT,
)


class KlaytnBaseTesting(TestCase):
    sdk = OpenSDK(KLAYTN_URL)

    def setUp(self) -> None:
        self.response = None
        self.status_response = None

    def covert_response(self, response):
        self.status_response = response.status
        self.response = json.loads(response.data)

    def assertResponseSuccess(self):
        self.assertEqual(self.status_response, HTTP_200_OK)

    def assertErrorCodeIncorrectMethod(self):
        self.assertEqual(self.response["error"]["code"], ERROR_CODE_INCORRECT_METHOD)

    def assertErrorCodeMissingRequiredArgument(self):
        self.assertEqual(self.response["error"]["code"], ERROR_CODE_REQUIRE_ARGUMENT)
