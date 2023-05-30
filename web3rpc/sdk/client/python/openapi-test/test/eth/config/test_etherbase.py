from base.testing import KlaytnBaseTesting


class TestEtherbase(KlaytnBaseTesting):

    def test_post(self):
        self.response = self.sdk.eth.etherbase()
        self.assertResponseSuccess()
