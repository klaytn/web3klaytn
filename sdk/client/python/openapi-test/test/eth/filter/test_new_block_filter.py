from base.testing import KlaytnBaseTesting


class TestEthNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        eth_response = self.sdk.eth.new_block_filter()

        self.covert_response(eth_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
