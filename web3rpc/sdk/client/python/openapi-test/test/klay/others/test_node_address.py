from base.testing import KlaytnBaseTesting


class TestNodeAddress(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.w3.klay.node_address()
        self.assertResponseSuccess()
