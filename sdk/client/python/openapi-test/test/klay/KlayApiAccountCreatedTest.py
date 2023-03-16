import unittest
from unittest.mock import patch

import urllib3

import openapi_client
from openapi_client.paths.klay_account_account_created import post  # noqa: E501
from openapi_client import configuration, schemas, api_client

class TestKlayAccountAccountCreated(unittest.TestCase):
    """
    KlayAccountAccountCreated unit test stubs
        [accountCreated] Find if input address was created  # noqa: E501
    """
    _configuration = configuration.Configuration()

    def setUp(self):
        used_api_client = api_client.ApiClient(configuration=self._configuration)
        self.api = post.ApiForpost(api_client=used_api_client)  # noqa: E501

    def tearDown(self):
        pass