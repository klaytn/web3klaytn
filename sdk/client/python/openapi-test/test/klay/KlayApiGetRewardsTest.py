# # coding: utf-8
# import unittest
#
# from klay.opensdk_python_klay.configuration import Configuration
# from klay.opensdk_python_klay.api_client import ApiClient
# from klay.opensdk_python_klay.apis.tags.klay_api import KlayApi
#
#
# class TestKlayGetRewards(unittest.TestCase):
#     host = "http://localhost:8551"
#     klay = KlayApi(ApiClient(configuration=Configuration(host=host)))
#
#     def test_post(self):
#         result = self.klay.get_rewards(1.0)
#
#
# if __name__ == '__main__':
#     unittest.main()
