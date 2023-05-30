from base.testing import KlaytnBaseTesting


class TestEthNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.new_block_filter()
        self.assertResponseSuccess()
