from base.testing import KlaytnBaseTesting


class TestNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.klay.new_block_filter()
        self.assertResponseSuccess()
