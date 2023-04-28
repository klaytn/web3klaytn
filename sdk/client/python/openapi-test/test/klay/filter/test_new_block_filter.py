from base.testing import KlaytnBaseTesting


class TestNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        klay_response = self.sdk.klay.new_block_filter()

        self.covert_response(klay_response.response)
        self.assertResponseSuccess()
        self.assertIn("result", self.response)
