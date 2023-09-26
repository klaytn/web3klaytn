from base.testing import KlaytnBaseTesting


class TestNodeAddress(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.governance.node_address()
        self.assertRegex(self.response, r'^0x.*$')
