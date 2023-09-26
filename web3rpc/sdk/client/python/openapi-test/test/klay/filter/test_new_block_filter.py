from base.testing import KlaytnBaseTesting


class TestNewBlockFilter(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.new_block_filter()
        self.assertRegex(self.response, r'^0x.*$')
