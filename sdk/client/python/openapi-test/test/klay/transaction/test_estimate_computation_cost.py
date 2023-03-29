from base.testing import KlaytnBaseTesting


class TestKlayEstimateComputationCost(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.call_object = {
            "from": "0x73718c4980728857f3aa5148e9d1b471efa3a7dd",
            "to": "0x069942a3ca0dabf495dba872533134205764bc9c",
            "value": "0x0",
            "input": "0x2a31efc7000000000000000000000000000000000000000000000000000000000000271000000000000000000000000000000000000000000000000000000000000000420000000000000000000000000000000000000000000000000000000000003039"
        }
        self.blockNumberOrHash = "latest"

    def test_post(self):
        klay_response = self.sdk.klay.estimate_computation_cost(self.call_object, self.blockNumberOrHash)
        
        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("result", self.response)

    def test_post_wrong_with_lack_paramaters(self):
        klay_response = self.sdk.klay.estimate_computation_cost(self.call_object)

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("jsonrpc", self.response)
        self.assertIn("id", self.response)
        self.assertIn("error", self.response)
        self.assertErrorCodeMissingRequiredArgument()
